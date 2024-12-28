import Image from "next/image";
import { Metadata } from 'next';

export const metadata = {
  title: 'Volunteer',
};


export default function Volunteer() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-raleway)]">
      <h1 className="text-2xl font-[family-name:var(--font-raleway)]">Volunteer</h1>
    </div>
  );
}
