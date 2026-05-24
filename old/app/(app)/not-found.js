import Link from 'next/link'
import Heading from "../ui/heading/heading";

export const metadata = {
    title: 'Page not Found',
  };

export default function Custom404() {
    return (
        <div className="text-center my-44">
            <Heading className="mb-8 mx-4">The page you're looking for can't be found. </Heading>
            <p className="font-[family-name:var(--font-montserrat)] mb-8">Whilst you're here, maybe take a look at our <Link href='/classes' className="text-orange-800">courses</Link>.</p>
            <Link className="text-cyan-800 hover:text-cyan-500 text-lg font-[family-name:var(--font-montserrat)]" href='/'>Go Home</Link>
        </div>
    )
}