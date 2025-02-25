import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

import HeroSection from "./components/heroSection/heroSection";

export default async function LayoutDashboard() {
  const session = await auth();
  
  if (!session) {
    redirect('/auth');
  }

  return <>
    <section className="p-6 w-full">
      <h2 className="text-lg mb-4">Home</h2>

      <HeroSection />
    </section>
  </>;
}
