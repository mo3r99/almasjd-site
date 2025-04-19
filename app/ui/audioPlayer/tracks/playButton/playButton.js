"use client";

import { useAudio } from "@/app/lib/AudioContext";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Play, Share } from "lucide-react";

function PlayButttonDesktop({ album, ...props }) {
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

  function handlePlayAll(album) {
    setTracks(album.tracks);
    setIsPlaying(true);
  }

  return (
    <Button
      className="rounded-full bg-tradewind p-3 scale-150"
      onClick={() => handlePlayAll(album)}
    >
      <Play />
    </Button>
  );
}

function PlayButtonMobile({ album, ...props }) {
  const path = usePathname();
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

  function handlePlayAll(album) {
    setTracks(album.tracks);
    setIsPlaying(true);
  }

  const shareData = {
    title: album.title,
    text: "Learn and grow through this playlist on almasjid.co.uk",
    url: `https://www.almasjid.co.uk/${path}`,
  };

  const handleShare = async () => {
    if (navigator?.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("error");
      }
    }
  };

  return (
    <>
      <Button
        className="rounded-full bg-tradewind hover:bg-[#4c8d7e] p-3 block md:hidden"
        onClick={() => handlePlayAll(album)}
      >
        <Play />
      </Button>
      <Button
        className="rounded-full bg-neutral-300 hover:bg-neutral-400 p-3 block md:hidden"
        onClick={handleShare}
      >
        <Share />
      </Button>
    </>
  );
}
export { PlayButttonDesktop, PlayButtonMobile };
