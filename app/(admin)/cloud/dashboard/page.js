import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function LayoutDashboard() {
  const session = await auth();

  if (!session) {
    redirect('/auth');
  }

  return <div>hello</div>;
}
