"use client";

import Image from "next/image";

import { useAudio } from "@/app/lib/AudioContext";

import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

import {
  RewindIcon,
  PlayIcon,
  FastForwardIcon as ForwardIcon,
  PauseIcon,
} from "lucide-react";

import { formatTime } from "@/app/lib/formatDate";
import { cn } from "@/lib/utils";

export default function VaulDrawer({
  open,
  setOpen,
  handleProgressChange,
  handleNextTrack,
  handlePrevTrack,
  handlePlayPause,
  duration,
  currentTime,
}) {
  const {
    tracks,
    setTracks,
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
    artwork,
  } = useAudio();

  const fullPlayer = (
    <>
      <div
        className={cn(
          "w-[90%] md:w-[70%] max-w-[500px] flex flex-col align-center justify-center mx-auto px-4 md:px-8 pb-8"
        )}
      >
        {/* <div className="w-full h-full">
          <Image
            src={artwork}
            alt="artwork"
            className="w-full aspect-square object-cover mb-6"
            width={500}
            height={500}
          />
        </div> */}
        <div className="flex items-center gap-3 mt-4 w-full">
          <div className="flex flex-col justify-center text-center w-full overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold whitespace-nowrap animate-marquee md:animate-none">
              {tracks[currentTrackIndex]?.title || ""}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg truncate">
              {tracks[currentTrackIndex]?.artist || ""}
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 w-full">
          <Slider
            value={[progress]}
            onValueChange={handleProgressChange}
            max={duration}
            step={1}
            bg="bg-zinc-300"
          />
          <div className="text-sm md:text-base text-muted-foreground justify-between flex mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="mt-8 md:mt-12 w-full flex justify-center items-center gap-4 scale-100 md:scale-125">
          <Button
            className="w-10 h-10 md:w-12 md:h-12"
            variant="ghost"
            onClick={handlePrevTrack}
          >
            <RewindIcon className="w-6 h-6 md:w-8 md:h-8" />
          </Button>
          <Button
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-weborange"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <PlayIcon className="w-6 h-6 md:w-8 md:h-8" />
            )}
          </Button>
          <Button
            className="w-10 h-10 md:w-12 md:h-12"
            variant="ghost"
            onClick={handleNextTrack}
          >
            <ForwardIcon className="w-6 h-6 md:w-8 md:h-8" />
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="bg-gray-100 flex flex-col z-[49] rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none font-[family-name:var(--font-montserrat)]"
          style={{
            paddingBottom: "calc(env(safe-area-inset-bottom) - 1rem)",
          }}
        >
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-md md:max-w-[80vw] mx-auto">
              <Drawer.Title className="font-medium mb-4 text-gray-900 text-center">
                Now Playing
              </Drawer.Title>
              {fullPlayer}
            </div>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://forms.office.com/e/MaHvDXX6kn"
                target="_blank"
              >
                Having issues?
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
