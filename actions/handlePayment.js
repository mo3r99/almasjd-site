"use server";

import "server-only";

import { redirect } from "next/navigation";
import { verifyEmail, verifyPostcode } from "@/app/lib/verifyInput";

import { unFormatAmount } from "@/app/lib/formatAmount";

export async function handlePayment(prevState, formData) {
  "use server";

  const rawData = {
    type: formData.get("type"),
    name: formData.get("name"),
    amount: unFormatAmount(formData.get("amount")),
    email: formData.get("email"),
    giftAidAddress: {
      houseNumber: formData.get("house-number"),
      street: formData.get("street"),
      city: formData.get("city"),
      postcode: formData.get("postcode"),
    },
  };

  if (
    !verifyEmail(rawData.email) ||
    (rawData.giftAidAddress.postcode && 
    !verifyPostcode(rawData.giftAidAddress.postcode))
  ) {
    return redirect("/error");
  }

  redirect(
    encodeURI(
      `/payment/${rawData.type}/${rawData.name}/${rawData.email}/${
        rawData.amount
      }/${
        rawData.giftAidAddress.houseNumber
          ? `giftaid/${JSON.stringify(rawData.giftAidAddress)}`
          : ""
      }`
    )
  );
}
