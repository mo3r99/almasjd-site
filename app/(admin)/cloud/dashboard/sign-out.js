import { signOut } from "@/auth"
import { LogOut } from 'lucide-react';


import { Button } from "@/components/ui/button"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button type="submit" className="w-[30px] h-[30px]"><LogOut /></Button>
    </form>
  )
}