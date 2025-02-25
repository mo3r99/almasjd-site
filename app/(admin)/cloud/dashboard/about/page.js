import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function About() {
  const session = await auth();

  if (!session) {
    redirect('/auth');
  }

  return <div>about</div>;
}
