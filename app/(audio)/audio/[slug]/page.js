import Image from "next/image";
import AUDIO from "@/store/audio/audio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Share } from "lucide-react";

export default async function AlbumPage({ params }) {
  const p = await params;
  const albumID = p.slug;

  let album;
  for (var playlist of AUDIO) {
    if (albumID == playlist.id) {
      album = playlist;
      break;
    }
  }

  if (!album) {
    return <div>Playlist not found</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-5xl font-[family-name:var(--font-montserrat)] mb-[15vh]">
        <div className="flex flex-col md:flex-row gap-8 mb-8 max-w-[80vw] mx-auto">
          {album.cover && (
            <div className="w-full md:w-64 h-64 aspect-square relative">
              <Image
                src={album.cover}
                alt={album.title}
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 15vw"
                className="object-cover rounded-lg"
              />
            </div>
          )}

          <div className="flex flex-col gap-4 justify-around">
            <div>
              <h1 className="text-3xl font-bold mb-4 font-[family-name:var(--font-raleway)]">
                {album.title}
              </h1>
              {album.description && (
                <p className="text-foreground mb-2">{album.description}</p>
              )}
              <p className="text-muted-foreground">
                Total Tracks:{" "}
                <span className="font-semibold">{album.tracks.length}</span>
              </p>
            </div>
            <div className="hidden md:block md:ml-auto">
              <Button className="rounded-full bg-tradewind p-3 scale-150">
                <Play />
              </Button>
            </div>
        <div className="flex gap-4 items-center">
            <Button className="rounded-full bg-tradewind hover:bg-[#4c8d7e] p-3 block md:hidden">
                <Play />
            </Button>
            <Button className="rounded-full bg-neutral-300 hover:bg-neutral-400 p-3 block md:hidden">
                <Share />
            </Button>
        </div>
          </div>
        </div>

        <div className="space-y-0 max-w-[80vw] mx-auto">
          {album.tracks?.map((track, index) => (
            <div
              key={track.id}
              className={cn(
                "flex items-center p-4 transition-all duration-150 hover:bg-[#e5e4e488]",
                index != 0 &&
                  index != album.tracks.length &&
                  "border-t-[1px] border-neutral-400"
              )}
            >
              <div className="mr-4 text-gray-500">{index + 1}</div>
              <div className="flex-grow">
                <h3 className="font-medium truncate max-w-[68vw]">{track.title}</h3>
                {track.duration && (
                  <p className="text-sm text-gray-500">
                    {Math.floor(track.duration / 60)}:
                    {String(track.duration % 60).padStart(2, "0")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
