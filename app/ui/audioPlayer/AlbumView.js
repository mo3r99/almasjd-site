"use client";

import Album from "./Album";
import { cn } from "@/lib/utils";

import AUDIO from "@/store/audio/audio";
import { useAudio } from "@/app/lib/AudioContext";

export default function AlbumView({ albums, ...props }) {
  const {
    tracks,
    setTracks,
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
  } = useAudio();

  const handlePlayPlaylist = (id) => {
    setTracks(AUDIO[id - 1].tracks);
    setCurrentTrackIndex(0);
    setIsPlaying(true);
  };

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
              handleThumbnailPlay={handlePlayPlaylist}
            />
          ))}
        </div>
      </section>
    </>
  );
}
