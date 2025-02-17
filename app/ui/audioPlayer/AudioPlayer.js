"use client";

import { useState, useRef, useEffect } from "react";

import {
  FastForward as ForwardIcon,
  PlayIcon,
  RewindIcon,
  PauseIcon,
  ChevronUp,
  ChevronDown
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

import Image from "next/image";

export default function AudioPlayer({ className }) {
  const [tracks, setTracks] = useState([
    {
      title: "5 - Al Ma'idah",
      artist: "Summary of Meanings of Quran",
      src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/Surah-5-Al-Maidah-The-Table-Spread.mp3",
    },
    {
      title: "6 - Al An'am",
      artist: "Summary of Meanings of Quran",
      src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/Surah-6-Al-Anam-The-Cattle.mp3",
    },
  ]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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

  // Function to format time in minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // useEffect to handle track change
  useEffect(() => {
    console.log("running effect");
    if (audioRef.current) {
      //audioRef.current.pause();
      audioRef.current.src = tracks[currentTrackIndex]?.src || "";
      //audioRef.current.load();
      audioRef.current.currentTime = 0;
      setCurrentTime(0); // Reset the current time for the new track
      setProgress(0); // Reset the progress for the new track
      if (isPlaying) {
        //audioRef.current.play();
      }
    }
  }, [currentTrackIndex, tracks]);

  const toggleFullPlayer = () => {
    setFullPlayerOpen(!fullPlayerOpen);
    console.log("opening full screen player");
  };

  const fullPlayer = (
    <div className={cn("absolute top-0 left-0 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-500 w-screen h-screen bg-slate-100 z-50", fullPlayerOpen ? 'translate-y-0' : 'translate-y-[100vh]')}>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full flex absolute bottom-[20px] left-[50%] translate-x-[-50%]"
        onClick={toggleFullPlayer}
      >
        <ChevronDown className="block" />
      </Button>
      <div className={cn("max-w-[min(500px, 50vw)] flex flex-col align-center justify-center mx-auto px-12 mt-[120px]")}>
        <Image src={"/artwork.png"} width={500} height={500} alt="artwork" />
        <div
          id="title-art"
          className="flex items-center gap-3 mt-4 text-center"
        >
          <div className="h-full flex flex-col justify-center text-center w-full">
            <h2 className="text-2xl font-bold">
              {tracks[currentTrackIndex]?.title || "Audio Title"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {tracks[currentTrackIndex]?.artist || "Person Name"}
            </p>
          </div>
        </div>

        <div id="progress" className="mt-12">
          <Slider
            value={[progress]}
            onValueChange={handleProgressChange}
            max={duration}
            step={1}
            className=""
            bg='bg-zinc-300'
          />
          <div className="text-sm text-muted-foreground justify-between flex mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="mt-12 w-full flex justify-center items-center gap-4 scale-125">
          <Button className='w-12 h-12' variant="ghost" onClick={handlePrevTrack}>
            <RewindIcon className="w-12 h-12" />
          </Button>
          <Button className='w-12 h-12 rounded-full bg-weborange' onClick={handlePlayPause}>
            {isPlaying ? (
              <PauseIcon className="w-12 h-12" />
            ) : (
              <PlayIcon className="w-12 h-12" />
            )}
          </Button>
          <Button className='w-12 h-12' variant="ghost" onClick={handleNextTrack}>
            <ForwardIcon className="w-12 h-12" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col w-screen items-center justify-center text-foreground max-h-[150px] md:max-h-[100px] fixed bottom-0 left-0">
        <div className="max-w-screen w-full space-y-4">
          <Card>
            <CardContent className="px-2 py-4 md:p-0 grid grid-cols-4 md:grid-cols-4 gap-3 relative">
              <div
                id="title-art"
                className="col-span-3 md:col-span-1 flex items-center gap-3 pl-2"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full flex md:hidden"
                  onClick={toggleFullPlayer}
                >
                  <ChevronUp className="block" />
                </Button>
                <Image
                  src="https://almasjid-site.s3.eu-north-1.amazonaws.com/quran.png"
                  alt="Album Cover"
                  width={25}
                  height={25}
                  className="rounded-full w-12 h-12 object-cover"
                />

                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-lg font-bold">
                    {tracks[currentTrackIndex]?.title || "Audio Title"}
                  </h2>
                  <p className="text-muted-foreground text-sm hidden smd:block">
                    {tracks[currentTrackIndex]?.artist || "Person Name"}
                  </p>
                </div>
              </div>

              <div
                id="controls-progress"
                className="col-span-1 md:col-span-2 mr-2 flex flex-col items-center px-4 md:p-0"
              >
                {/* controls */}
                <div id="controls-desktop" className="hidden md:block">
                  <Button variant="ghost" size="icon" onClick={handlePrevTrack}>
                    <RewindIcon className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handlePlayPause}>
                    {isPlaying ? (
                      <PauseIcon className="w-6 h-6" />
                    ) : (
                      <PlayIcon className="w-6 h-6" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleNextTrack}>
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
                      <PauseIcon className="w-6 h-6" />
                    ) : (
                      <PlayIcon className="w-6 h-6" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleNextTrack}>
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
                    className="h-[1px]"
                    disabled={window.innerWidth > 767 ? false : true}
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
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {window?.innerWidth < 767 && fullPlayer}
    </>
  );
}
