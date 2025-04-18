"use client";

import { handlePayment } from '@/actions/handlePayment';
import DonationForm from "../../ui/donationComponents/DonationForm";

export default function Sadaqah() {
  return (
    <div
      id="checkout"
      className="max-w-[80vw] w-full mx-auto font-[family-name:var(--font-montserrat)]"
    >
      <div className="w-full flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="w-full">
          <DonationForm action={handlePayment} giftAidEligible={true} type={'sadaqah'} />
        </div>
      </div>
    </div>
  );
}