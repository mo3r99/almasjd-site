import { verifyEmail, verifyPostcode } from "@/app/lib/verifyInput";
import { redirect } from "next/navigation";

import ElementsCheckout from "./ElementsCheckout";

export default async function Checkout({ params }) {
  function parseURLJSON(url) {
    let map;
    try {
      map = JSON.parse(url.split("%3A"));
    } catch (error) {
      redirect("/error");
    }
    return map;
  }

  const payment = (await params).payment;

  const type = payment[0];
  const name = decodeURIComponent(payment[1]);
  const email = decodeURIComponent(payment[2]);
  const amount = payment[3];

  let giftAidURI, giftAidJSON, houseNumber, street, city, postcode, details;

  if (payment[4]) {
    giftAidURI = decodeURIComponent(payment[5]);
    giftAidJSON = parseURLJSON(giftAidURI);

    houseNumber = giftAidJSON.houseNumber;
    street = giftAidJSON.street;
    city = giftAidJSON.city;
    postcode = giftAidJSON.postcode;

    details = {
      name,
      houseNumber,
      street,
      city,
      postcode
    }

    if (!verifyPostcode(postcode) || !verifyEmail(email) || !houseNumber) {
      return redirect("/error");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-montserrat)]">
      <h1 className="text-2xl font-bold mb-4 font-[family-name:var(--font-raleway)]">Checkout</h1>

      <ElementsCheckout amount={amount} email={email} type={type} address={details} name={name} />
    </div>
  );
}
