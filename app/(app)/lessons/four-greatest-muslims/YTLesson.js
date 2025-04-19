import Link from 'next/link'
import Image from "next/image";
import Button from "@/app/ui/button/button";

export default function YTLesson({title, link, image}) {
  return (
    <div className="z-10">
      <Link href={link}>
        <Image
          src={`//wsrv.nl/?url=${image}&w=300&h=300`}
          unoptimized
          alt={title}
          className="rounded-lg pointer-events-none hover:cursor-grab w-[300px] h-[168px] object-cover"
          width={300}
          height={300}
        />
      </Link>
      <h2 className="text-white font-[family-name:var(--font-raleway)] font-bold text-2xl mt-4">
        {title}
      </h2>
      <Button
        href={link}
        className="mt-1"
        colour="orange"
      >
        Go to lesson
      </Button>
    </div>
  );
}
