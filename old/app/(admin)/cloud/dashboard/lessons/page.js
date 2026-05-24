import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Lessons() {
  const session = await auth();

  if (!session) {
    redirect('/auth');
  }

  return <div>lessons</div>;
}
