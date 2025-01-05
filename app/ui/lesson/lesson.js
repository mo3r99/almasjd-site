import Heading from "../heading/heading";
import Button from "../button/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Lesson({
  children,
  title,
  className,
  href,
  external,
  image,
}) {
  return (
    <div className={cn("max-h-[450px] md:h-[50vh] relative max-w-[300px] m-auto", className, href)}>
      <div className="w-[100%] h-[200px] mb-4 relative">
        <Image
          alt={title}
          src={`${image ? image : "/placeholder.png"}`}
          style={{
            clipPath:
              "polygon(50% 0%, 80% 10%, 100% 35%, 100% 100%, 80% 100%, 50% 100%, 20% 100%, 0 100%, 0% 35%, 20% 10%)",
          }}
          layout={"fill"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <Heading className="text-lg">{title}</Heading>
      <p className="font-[family-name:var(--font-montserrat)] mb-8">
        {children}
      </p>
      {external ? (
        <Button
          href={href}
          target="_blank"
          colour="black"
          className="mt-4 md:mt-0"
        >
          See More
        </Button>
      ) : (
        <Button href={href} colour="black" className="md:mt-0">
          See More
        </Button>
      )}
    </div>
  );
}
