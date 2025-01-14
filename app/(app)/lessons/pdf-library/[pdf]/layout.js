import { ArrowLeft } from "lucide-react";
import { revalidatePath } from "next/cache";

export default function PDFLayout({ children }) {
  return (
    <html>
      <body style={{background: 'white'}}>
      <a className='absolute z-10 flex' href={"/lessons/pdf-library"}><ArrowLeft/> Go back</a>
      {children}
      </body>
    </html>
  );
}
