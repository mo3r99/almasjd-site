import { Download } from "lucide-react";
import Image from "next/image";

export default function Calendar() {
  return (
    <>
      <a
        href="https://almasjid-site.s3.eu-north-1.amazonaws.com/ramadhan-calendar-2025-print-friendly.pdf"
        download="Ramadhan Calendar"
        className="mx-auto my-4 p-4 bg-tradewind text-white rounded-md hover:bg-[#559c8c] flex gap-2"
      >
        <span>
            <Download />
        </span>
        Download Calendar
      </a>
      <Image
        width={800}
        height={1200}
        src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/calendar.jpeg"}
        className="mx-auto hidden md:block my-4"
        alt='Ramadhan Calendar'
      />

      <Image
        width={500}
        height={900}
        src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/calendar.jpeg"}
        className="mx-auto block md:hidden my-4"
        alt='Ramadhan Calendar'
      />
    </>
  );
}
