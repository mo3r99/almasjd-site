"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEYA
);

export default function ElementsCheckout({ amount, email, address, type, name }) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: amount*100,
        currency: "gbp",
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#6bbaa7',
                colorBackground: '#ffffff',
                colorText: '#30313d',
                colorDanger: '#df1b41',
                fontFamily: 'Raleway, sans-serif',
                spacingUnit: '4px',
                borderRadius: '14px',
                // See all possible variables below
              }
            
        }
      }}
    >
      <CheckoutForm type={type} amount={amount} email={email} address={address} name={name} />
    </Elements>
  );
}
