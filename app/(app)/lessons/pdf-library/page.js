import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Heading from "@/app/ui/heading/heading";
import { Link } from 'next-view-transitions'

export default function PDFLib() {
    return (
        <>
            <Breadcrumbs />
            <Heading>PDF Library</Heading>
            <Link href={'/pdf/1'}>Go to viewer</Link>
        </>
    )
}