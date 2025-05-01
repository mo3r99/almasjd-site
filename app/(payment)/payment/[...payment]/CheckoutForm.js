"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { formatAmount, unFormatAmount } from "@/app/lib/formatAmount";

import { Drawer } from "vaul";

export default function CheckoutForm({ type, amount, address, email, name }) {
  const elements = useElements();
  const stripe = useStripe();

  const [clientSecret, setClientSecret] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error } = await elements.submit();

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    const { submitError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
      },
    });

    if (submitError) {
      setError(submitError);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        type,
        mode: "payment",
        amount,
        address,
        email,
      }),
    })
      .then((res) => res.json())
      .then((res) => setClientSecret(res.clientSecret));
  }, [amount, address, email, name, type]);

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  const drawer = (
    <Drawer.Root open={showBankDetails} onOpenChange={setShowBankDetails}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div
              aria-hidden
              className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
            />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-bold text-lg mb-4 text-center text-gray-900 font-[family-name:var(--font-raleway)]">
                Bank Details
              </Drawer.Title>
              <div className="flex justify-between items-center mb-4 cursor-text pointer-events-auto">
                <div className="space-y-2 font-[family-name:var(--font-montserrat)]">
                  <p className="text-gray-700">
                    <span className="font-bold">Bank:</span> Natwest
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Account Name:</span> Al Masjid
                    SCIO
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Account No.:</span> 48421057
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Sort Code:</span> 52-41-56
                  </p>
                  <span className="border-b-2 border-neutral-200" />
                  <p className="text-gray-700">
                    <span className="font-bold">Reference:</span>
                    {(
                      type.toUpperCase() +
                      " " +
                      (name?.split(" ")[0]?.[0]?.toUpperCase() || "") +
                      " " +
                      (name?.split(" ")[1]?.toUpperCase() || "")
                    ).slice(0, 18)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <button
                className="text-xs text-gray-600 flex items-center gap-0.25"
                onClick={() => {
                  navigator.clipboard.writeText(`Bank: Natwest
              Account Name: Al Masjid SCIO
              Account No.: 48421057
              Sort Code: 52-41-56
              Reference: ${(
                type.toUpperCase() +
                " " +
                name.split(" ")[0][0].toUpperCase() +
                " " +
                name.split(" ")[1].toUpperCase()
              ).slice(0, 18)}`);
                  setCopied(true);
                }}
              >
                {!copied ? "Copy Details" : "Copied"}
                {!copied && (
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    className="w-3 h-3 ml-1"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                )}
                {copied && (
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    className="w-3 h-3 ml-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );

  return (
    <>
      <form className="max-w-5xl w-full mx-auto" onSubmit={handleSubmit}>
        <div className="max-w-[80vw] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-8">
            <div className="md:p-6 md:col-span-4">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-4">
                <span>
                  {type == "support"
                    ? "Donation to Al Masjid"
                    : type == "sadaqah"
                    ? "Give Sadaqah"
                    : type}
                </span>
                <span>{formatAmount(amount)}</span>
              </div>
              <div className="pl-4 mb-4">
                <p className="">{name}</p>
                {address && (
                  <>
                    <span>{address.houseNumber} </span>
                    <span>{address.street}, </span>
                    <span>{address.city}, </span>
                    <span>{address.postcode}</span>
                  </>
                )}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatAmount(amount)}</span>
                </div>
                {(type == "support" || type == "sadaqah") && !address && (
                  <div className="mt-8">
                    <p className="text-sm">
                      Please note, after processing fees are deducted, your
                      donation will be{" "}
                      {formatAmount(
                        parseFloat(unFormatAmount(amount)) -
                          0.015 * parseFloat(unFormatAmount(amount)) -
                          0.25
                      )}
                      .{" "}
                      {!address && (
                        <>
                          If you would like your whole donation to reach us,
                          consider paying via{" "}
                          <a
                            href="#"
                            className="underline text-cyan-600"
                            onClick={() => setShowBankDetails(true)}
                          >
                            bank transfer
                          </a>
                          .
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="md:border-l-2 md:p-6 md:col-span-3">
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <PaymentElement options={{ layout: "accordion" }} />

              <div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4"
                >
                  Pay {formatAmount(amount)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {drawer}
    </>
  );
}
