"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { formatAmount } from "@/app/lib/formatAmount";

export default function CheckoutForm({ type, amount, address, email, name }) {
  const elements = useElements();
  const stripe = useStripe();

  const [clientSecret, setClientSecret] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  }, [amount, amount, address, email]);

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

  return (
    <>
      <form className="max-w-5xl w-full mx-auto" onSubmit={handleSubmit}>
        <div className="max-w-[80vw] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-8">
            <div className="p-6 col-span-4">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-4">
                <span>
                  {type == "donation" ? "Donation to Al Masjid" : type}
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
              </div>
            </div>
            <div className="border-l-2 p-6 col-span-3">
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
                {/* {error && <div>{error.message}</div>} */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
