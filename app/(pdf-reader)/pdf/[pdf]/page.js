import PdfReader from "@/app/ui/pdfReader/pdfReader";

export default async function PDFLib ({params}) {
    const pdf = await params.pdf

    return (
        <PdfReader src={`https://almasjid-site.s3.eu-north-1.amazonaws.com/${pdf}.pdf`} />
    )
}