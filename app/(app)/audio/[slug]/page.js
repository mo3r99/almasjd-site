import Image from "next/image";
import AUDIO from "@/store/audio/audio";
import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import TracksRender from "@/app/ui/audioPlayer/tracks/TrackRender";
import { notFound } from "next/navigation";
import {
  PlayButtonMobile,
  PlayButttonDesktop,
} from "@/app/ui/audioPlayer/tracks/playButton/playButton";

export async function generateMetadata({params}) {
  const albumID = (await params).slug;
  console.log(albumID)
  for (var playlist of AUDIO) {
    console.log(playlist)
    if (albumID == playlist.id) {
      console.log(playlist)
      return {
        title: playlist.title,
        description: playlist.description,
      };
    }
  }

  
}

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
    notFound();
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-5xl font-[family-name:var(--font-montserrat)] mb-[15vh]">
        <Breadcrumbs className={"mb-8 max-w-[80vw] mx-auto"} />

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
              <PlayButttonDesktop album={album} />
            </div>
            <div className="flex gap-4 items-center">
              <PlayButtonMobile album={album} />
            </div>
          </div>
        </div>

        <div className="space-y-0 max-w-[80vw] mx-auto">
          <TracksRender tracks={album.tracks} playlist={playlist} />
        </div>
      </div>
    </>
  );
}
