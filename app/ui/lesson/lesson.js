import Heading from "../heading/heading";
import Button from "../button/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const placeholder =
  "almasjid-site.s3.eu-north-1.amazonaws.com/placeholder.png";

export default function Lesson({
  children,
  title,
  className,
  href,
  external,
  image,
  applicationsOpen,
  newCourse
}) {
  return (
    <div
      className={cn(
        "max-h-[450px] h-full w-full sm:max-w-[300px] relative m-auto",
        className,
        href
      )}
    >
      <div className="w-full aspect-[3/2] mb-4 relative">
        <Image
          alt={title}
          src={image ? `//wsrv.nl/?url=${image}&w=300&h=300` : `//wsrv.nl/?url=${placeholder}&w=300&h=300`}
          // style={{
          //   clipPath:
          //     "polygon(50% 0%, 80% 10%, 100% 35%, 100% 100%, 80% 100%, 50% 100%, 20% 100%, 0 100%, 0% 35%, 20% 10%)",
          // }}
          style={{
            clipPath: "circle(70% at 50% 90%)",
          }}
          unoptimized
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
          className="object-cover"
        />
      </div>
      <div className="mb-2">
        {newCourse && <span className="font-[family-name:var(--font-montserrat)] bg-weborange p-1 rounded-md text-xs text-white uppercase mr-2">
          New
        </span>}
        {applicationsOpen && <span className="font-[family-name:var(--font-montserrat)] bg-weborange p-1 rounded-md text-xs text-white uppercase">
          Applications Open
        </span>}
      </div>
      <Heading className="text-base sm:text-lg md:text-xl">{title}</Heading>
      <p className="font-[family-name:var(--font-montserrat)] mb-4 sm:mb-8 text-sm sm:text-base">
        {children}
      </p>
      {external ? (
        <Button
          href={href}
          target="_blank"
          colour="black"
          className="w-full sm:w-auto mt-2 sm:mt-4 md:mt-0"
        >
          See More
        </Button>
      ) : (
        <Button
          href={href}
          colour="black"
          className="w-full sm:w-auto mt-2 sm:mt-4 md:mt-0"
        >
          See More
        </Button>
      )}
    </div>
  );
}
