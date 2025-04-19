"use client";

import { cn } from "@/lib/utils";

import { Play } from "lucide-react";

import { useAudio } from "@/app/lib/AudioContext";

export default function TracksRender({ playlist, tracks, ...props }) {
  const {
    tracks_,
    setTracks,
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
    artwork, 
    setArtwork
  } = useAudio();

  const handleTrackPress = (track) => {
    setTracks(playlist.tracks);
    setCurrentTrackIndex(track.id-1);
    setArtwork(playlist.cover)
    setIsPlaying(true);
  };

  return (
    <>
      {tracks.map((track, index) => (
        <div
          key={track.id}
          onClick={() => handleTrackPress(track)}
          className={cn(
            "flex items-center p-4 transition-all duration-150 hover:bg-[#e5e4e488] group relative cursor-pointer",
            index != 0 &&
              index != tracks.length &&
              "border-t-[1px] border-neutral-400",
            index % 2 == 0 ? "bg-transparent" : "bg-[#efefef88]"
          )}
        >
          <div className="group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-150 absolute -left-2 opacity-0 text-muted-foreground mr-6 scale-75">
            <Play />
          </div>
          <div className="mr-4 text-gray-500 group-hover:translate-x-6 transition-all duration-150">
            {index + 1}
          </div>
          <div className="flex-grow group-hover:translate-x-6 transition-all duration-150">
            <h3 className="font-medium truncate max-w-[68vw] float-left group-hover:underline">
              {track.title}
            </h3>
          </div>
          {/* {track.duration && (
            <p className="text-sm text-gray-500 group-hover:-translate-x-6 hidden md:block">
              {Math.floor(track.duration / 60)}:
              {String(track.duration % 60).padStart(2, "0")}
            </p>
          )}
          {!track.duration && (
            <p className="text-sm text-gray-500 float-right group-hover:-translate-x-0 hidden md:block">
              {Math.floor(10000 / 60)}:{String(10000 % 60).padStart(2, "0")}
            </p>
          )} */}
        </div>
      ))}
    </>
  );
}
