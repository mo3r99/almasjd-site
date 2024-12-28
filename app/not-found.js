import Link from "next/link";
import Heading from "./ui/heading/heading";

export default function Custom404() {
    return (
        <div className="text-center mt-44">
            <Heading>This page was not found.</Heading>
            <Link className="text-cyan-800 hover:text-cyan-500 text-lg font-[family-name:var(--font-montserrat)]" href='/'>Go Home</Link>
        </div>
    )
}