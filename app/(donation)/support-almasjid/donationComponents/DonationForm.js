"use client";

import { useState } from "react";
import { startTransition } from "react";

import GiftAidForm from "./GiftAidForm";
import PriceSelect from "./PriceSelect";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { verifyEmail, verifyPostcode } from "@/app/lib/verifyInput";
import { formatAmount, unFormatAmount } from "@/app/lib/formatAmount";

export default function DonationForm({ action }) {
  const [amount, setAmount] = useState(0);
  const [formattedAmount, setFormattedAmount] = useState(amount);
  const [error, setError] = useState({
    email: false,
    amount: false,
    postcode: false,
  });
  const [giftAid, setGiftAid] = useState(false);

  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");

  const validatePostcode = () => {
    if (!verifyPostcode(postcode)) {
      setError({ ...error, postcode: true });
    } else {
      setError({ ...error, postcode: false });
    }
  };

  const handleAmountSelect = (amount) => {
    setAmount(unFormatAmount(amount));
    setFormattedAmount(amount);
  };

  function handleAmountBlur() {
    setFormattedAmount(formatAmount(amount));

    if (amount < 1.5) {
      setError({ ...error, amount: true });
    } else {
      setError({ ...error, amount: false });
    }
  }

  const handleEmailBlur = () => {
    if (!verifyEmail(email)) {
      setError({ ...error, email: true });
    } else setError({ ...error, email: false });
  };

  return (
    <>
      <PriceSelect
        amount={amount}
        formattedAmount={formattedAmount}
        handleAmountBlur={handleAmountBlur}
        handleAmountSelect={handleAmountSelect}
      />
      {error.amount && (
        <p className="text-red-500 text-sm mt-2">
          Please enter an amount more than £1.50
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEmailBlur(); handleAmountBlur();
          startTransition(() => action(null, new FormData(e.currentTarget)));
        }}
      >
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="type" value={"donation"} />

        <div className="mt-8">
          <label htmlFor="name" className="mt-8 pt-8">
            Full Name
          </label>
          <Input
            id="name"
            minLength={2}
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full mt-2"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="mt-4 pt-8">
            Email Address
          </label>
          <Input
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter your email address"
            className="w-full mt-2"
            required
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-2">
              Please enter a valid email address
            </p>
          )}
        </div>
        <div className="flex items-center space-x-2 mt-8">
          <Checkbox
            id="gift-aid"
            onClick={() => {
              setGiftAid(!giftAid);
            }}
            value={giftAid}
          />
          <label
            htmlFor="gift-aid"
            className="text-md font-medium font-[family-name:var(--font-montserrat)] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Opt me in for Gift Aid
          </label>
        </div>
        {giftAid && (
          <GiftAidForm
            amount={amount}
            postcode={postcode}
            setPostcode={setPostcode}
            validatePostcode={validatePostcode}
          />
        )}
        {error.postcode && (
          <p className="text-red-500 text-sm mt-2">
            Please enter a valid postcode
          </p>
        )}
        <Button
          type="submit"
          className="mt-8 mb-16 w-full"
          disabled={
            !(amount != 0 && amount != "£0") ||
            error.amount ||
            error.email ||
            error.postcode
          }
        >
          {"Proceed to payment"}
        </Button>
      </form>
    </>
  );
}
