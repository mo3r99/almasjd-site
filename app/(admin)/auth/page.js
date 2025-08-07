import Image from "next/image";

import { LoginForm } from "./login-form";
import Link from "next/link";

import { redirect } from "next/navigation";

import { auth } from "@/auth";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/cloud");
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-white">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex h-9 justify-center gap-2 md:justify-start">
          <a href="https://www.almasjid.co.uk" className="flex h-9 items-center gap-2 font-medium">
            <div className="flex items-center justify-center rounded-md text-primary-foreground">
              <Image
                src={
                  "//wsrv.nl/?url=almasjid-site.s3.eu-north-1.amazonaws.com/logo.png&w=80&h=80"
                }
                width={40}
                height={40}
                alt="almasjid logo"
                unoptimized
              />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={"//wsrv.nl/?url=almasjid-site.s3.eu-north-1.amazonaws.com/3.png&w=500&h=700"}
          fill
          unoptimized
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
