import Album from "./Album";
import { cn } from "@/lib/utils";

export default function AlbumView({ albums, ...props }) {
  return (
    <>
      <section className={cn("max-w-screen-lg mx-auto", props.className)}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[80vw]">
          {albums.map((album) => (
            <Album
              key={album.id}
              title={album.title}
              artist={album.artist}
              coverUrl={album.cover}
              id={album.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
