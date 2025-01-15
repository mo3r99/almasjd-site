import PdfReader from "@/app/ui/pdfReader/pdfReader";

export default async function PDFLib ({params}) {
    const pdf = await params.pdf

    return (
        <PdfReader src={`/pdf/${pdf}.pdf`} />
    )
}