import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

export async function LoginForm({ className, ...props }) {

  const submitHandler = async () => {
    "use server"
    await signIn("microsoft-entra-id", { redirectTo: "/cloud" })
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} action={submitHandler} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>
      <div className="grid gap-6">
        <div className="relative text-center text-sm">
          <span className="relative z-10 px-2 text-muted-foreground">
            Continue with your Microsoft account
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1024"
            height="1024"
            viewBox="0 0 1024 1024"
            fill="none"
          >
            <path
              d="M44.522 44.5217H489.739V489.739H44.522V44.5217Z"
              fill="#F35325"
            />
            <path
              d="M534.261 44.5217H979.478V489.739H534.261V44.5217Z"
              fill="#81BC06"
            />
            <path
              d="M44.522 534.261H489.739V979.478H44.522V534.261Z"
              fill="#05A6F0"
            />
            <path
              d="M534.261 534.261H979.478V979.478H534.261V534.261Z"
              fill="#FFBA08"
            />
          </svg>
          Login with Microsoft
        </Button>
      </div>
    </form>
  );
}
