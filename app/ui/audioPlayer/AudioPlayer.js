"use client";

import { useState, useRef, useEffect } from "react";

import {
  FastForward as ForwardIcon,
  PlayIcon,
  RewindIcon,
  PauseIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useAudio } from "@/app/lib/AudioContext";
import FullScreenPlayer from "./FullScreenPlayer";

import { formatTime } from "@/app/lib/formatDate";

export default function AudioPlayer({ className }) {
  // Add rate limiting - allow track change only every 500ms
  const lastTrackChange = useRef(Date.now());

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const {
    tracks,
    setTracks,
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
    artwork
  } = useAudio();

  const audioRef = useRef(null);
  const [fullPlayerOpen, setFullPlayerOpen] = useState(false);

  // Function to handle play/pause toggle
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  // Function to handle next track
  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  // Function to handle previous track
  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  // Function to handle time update of the track
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(audioRef.current.currentTime);

      if (currentTime >= duration) {
        handleNextTrack();
      }
    }
  };

  // Function to handle metadata load of the track
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (event) => {
    var time = event[0];

    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(audioRef.current.currentTime);
      setProgress(audioRef.current.currentTime);
    }
  };

  // useEffect to handle track change
  useEffect(() => {
    const now = Date.now();
    if (now - lastTrackChange.current < 500) {
      return; // Skip if changing tracks too fast
    }
    lastTrackChange.current = now;

    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex]?.src || "";
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setProgress(0);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex, tracks, isPlaying, setProgress]);

  const toggleFullPlayer = () => {
    setIsVisible(true);
    setTimeout(() => setFullPlayerOpen(!fullPlayerOpen), 1);
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {tracks.length > 0 && (
        <div className="z-[49] flex flex-col w-screen items-center justify-center text-foreground max-h-[150px] md:max-h-[100px] fixed bottom-0 left-0">
          <div className="max-w-screen w-full space-y-4">
            <Card
              style={{
                paddingBottom: "calc(env(safe-area-inset-bottom) - 1.3rem)",
              }}
            >
              <CardContent className="px-2 py-4 md:p-0 grid grid-cols-4 md:grid-cols-4 gap-3 relative">
                <div
                  id="title-art"
                  className="col-span-3 md:col-span-1 flex items-center gap-3 pl-2"
                  onClick={() => setFullPlayerOpen(true)}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full flex md:hidden"
                    onClick={toggleFullPlayer}
                  >
                    <ChevronUp className="block" />
                  </Button>
                  {/* <Image
                    src={artwork}
                    unoptimized
                    alt="Album Cover"
                    width={25}
                    height={25}
                    className="rounded-full w-12 h-12 object-cover"
                  /> */}

                  <div
                    className="h-full flex flex-col justify-center max-w-[60%] smd:max-w-[70%] lg:max-w-[90%]"
                    onClick={() => setFullPlayerOpen(true)}
                  >
                    <h2 className="text-lg font-bold truncate">
                      {tracks[currentTrackIndex]?.title || ""}
                    </h2>
                    <p className="text-muted-foreground text-sm hidden smd:block">
                      {tracks[currentTrackIndex]?.artist || ""}
                    </p>
                  </div>
                </div>

                <div
                  id="controls-progress"
                  className="col-span-1 md:col-span-2 mr-2 flex flex-col items-center px-4 md:p-0"
                >
                  {/* controls */}
                  <div id="controls-desktop" className="hidden md:block">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePrevTrack}
                    >
                      <RewindIcon className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? (
                        <PauseIcon className="w-6 h-6" />
                      ) : (
                        <PlayIcon className="w-6 h-6" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNextTrack}
                    >
                      <ForwardIcon className="w-6 h-6" />
                    </Button>
                  </div>

                  <div
                    id="controls-mobile"
                    className="flex h-full items-center md:hidden"
                  >
                    <Button
                      size="icon"
                      className="rounded-full mr-4"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? (
                        <PauseIcon
                          className={cn("w-6 h-6", !tracks && "disabled")}
                        />
                      ) : (
                        <PlayIcon
                          className={cn("w-6 h-6", !tracks && "disabled")}
                        />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNextTrack}
                    >
                      <ForwardIcon className="w-6 h-6" />
                    </Button>
                  </div>

                  <div
                    id="progress"
                    className="w-full absolute top-0 left-0 md:relative"
                  >
                    <Slider
                      value={[progress]}
                      onValueChange={handleProgressChange}
                      max={duration}
                      step={1}
                      className="h-[1px] pointer-events-none md:pointer-events-auto touch-none md:touch-auto"
                    />
                    <div className="text-sm text-muted-foreground justify-between hidden md:flex mt-4">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>
                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                >
                  Your browser does not support the audio element.
                </audio>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* {fullPlayer} */}
      <FullScreenPlayer open={fullPlayerOpen} setOpen={setFullPlayerOpen} handleProgressChange={handleProgressChange} handleNextTrack={handleNextTrack} handlePrevTrack={handlePrevTrack} handlePlayPause={handlePlayPause} duration={duration} currentTime={currentTime} />
    </>
  );
}
