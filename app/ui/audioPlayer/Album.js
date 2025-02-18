"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Album = ({ title, artist, coverUrl, id }) => {
  const router = useRouter();

  return (
    <div className="group relative transition-all rounded-md">
      <div className="relative aspect-square w-full mb-4">
        <Link
          href={`/audio/${id}`}
        >
          <Image
            src={coverUrl || "/default-album.png"}
            alt={`${title} cover`}
            className="object-cover rounded-md shadow-lg"
            fill
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 15vw"
          />
        </Link>
        <Button className="absolute bottom-2 right-2 p-1 rounded-full aspect-square bg-background hover:bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="text-neutral-700 p-0 m-0" />
        </Button>
      </div>
      <div className="space-y-1">
        <Link href={`/audio/${id}`}>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
        </Link>
        <Link href={`/audio/${id}`}>
          <p className="text-sm text-muted-foreground truncate">{artist}</p>
        </Link>
      </div>
    </div>
  );
};

export default Album;
