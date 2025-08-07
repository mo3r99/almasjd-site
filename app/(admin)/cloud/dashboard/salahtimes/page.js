import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SalahTimes from "../components/salahTimes/salahTimes";

export default async function SalahTimesPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth');
  }

  return <div className="p-4"><SalahTimes /></div>;
}
