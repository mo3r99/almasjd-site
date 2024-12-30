import Heading from "../heading/heading";
import Button from "../button/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Lesson({ children, title, className, href, external, image }) {
  return (
    <div className={cn("", className, href)}>
      <div
        className="w-[100%] h-[200px] mb-4"
        style={{ backgroundImage: `url("${image ? image : '/placeholder.png'}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 100%, 80% 100%, 50% 100%, 20% 100%, 0 100%, 0% 35%, 20% 10%)' }}
      ></div>
      <Heading className="text-lg">{title}</Heading>
      <p className="font-[family-name:var(--font-montserrat)] md:h-[110px]">
        {children}
      </p>
      {external ? (
        <Button
          href={href}
          target="_blank"
          colour="blue"
          className="mt-4 md:mt-0"
        >
          See More
        </Button>
      ) : (
        <Button href={href} colour="blue" className="mt-4 md:mt-0">
          See More
        </Button>
      )}
    </div>
  );
}
