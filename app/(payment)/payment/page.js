import { redirect } from "next/navigation";

export default function PaymentRedirect() {
    return redirect('/error');
}