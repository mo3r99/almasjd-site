import { Download } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'Ramadhan Calendar',
  description: 'The 2025 Ramadhan Calendar for Al Masjid'
}

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
        src={"//wsrv.nl/?url=almasjid-site.s3.eu-north-1.amazonaws.com/calendar.jpeg&w=1200&h=auto"}
        unoptimized
        className="mx-auto hidden md:block my-4"
        alt='Ramadhan Calendar'
      />

      <Image
        width={500}
        height={900}
        src={"//wsrv.nl/?url=almasjid-site.s3.eu-north-1.amazonaws.com/calendar.jpeg&w=900&h=auto"}
        unoptimized
        className="mx-auto block md:hidden my-4"
        alt='Ramadhan Calendar'
      />
    </>
  );
}
