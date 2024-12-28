import Link from "next/link";
import Heading from "./ui/heading/heading";

export const metadata = {
    title: 'Page not Found',
  };

export default function Custom404() {
    return (
        <div className="text-center my-44">
            <Heading className="mb-14">The page you're looking for can't be found. </Heading>
            <p></p>
            <Link className="text-cyan-800 hover:text-cyan-500 text-lg font-[family-name:var(--font-montserrat)]" href='/'>Go Home</Link>
        </div>
    )
}