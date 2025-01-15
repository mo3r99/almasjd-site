import Image from "next/image";
import logo from "@/assets/am-logos/logo.png";
import image from "@/assets/3.png";

import { LoginForm } from "./login-form";
import { Link } from 'next-view-transitions';
import { redirect } from "next/navigation";

import { auth } from "@/app/auth";

export default async function LoginPage() {
  const session = await auth()

  if (session) {
    console.log(session)
    if (session) {
      redirect('/cloud')
    }
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-white">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex h-9 justify-center gap-2 md:justify-start">
          <Link href="/" className="flex h-9 items-center gap-2 font-medium">
            <div className="flex items-center justify-center rounded-md text-primary-foreground">
              <Image src={logo} width={40} height={40} alt="almasjid logo" />
            </div>
            Al Masjid
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={image}
          fill
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
