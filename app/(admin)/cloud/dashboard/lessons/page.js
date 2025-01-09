import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function Lessons() {
  const session = await auth();
  if (session) {console.log(session)}

  if (!session) {
    redirect('/auth');
  }

  return <div>lessons</div>;
}
