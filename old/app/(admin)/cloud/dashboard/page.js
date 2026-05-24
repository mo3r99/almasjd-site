import { auth } from "@/auth";
import { redirect } from "next/navigation";

import HeroSection from "./components/heroSection/heroSection";
import SalahTimes from "./components/salahTimes/salahTimes";

export const metadata = {
  title: 'Al Masjid Admin Dashboard',
}
export default async function LayoutDashboard() {
  const session = await auth();
  
  if (!session) {
    redirect('/auth');
  }

  return <>
    <section className="p-6 w-full">
      {/* <h2 className="text-lg mb-4">Salah Times</h2> */}

      {/* <HeroSection /> */}
      <SalahTimes />
    </section>
  </>;
}
