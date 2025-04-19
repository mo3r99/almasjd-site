import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function Services() {
  const session = await auth();

  if (!session) {
    redirect('/auth');
  }

  return <div>services</div>;
}
