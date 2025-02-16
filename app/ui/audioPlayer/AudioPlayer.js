"use client";

import { useState, useRef, useEffect } from "react";

import {
  FastForward as ForwardIcon,
  PlayIcon,
  RewindIcon,
  PauseIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

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
    console.log('running effect')
    if (audioRef.current) {
      //audioRef.current.pause();
      audioRef.current.src = tracks[currentTrackIndex]?.src || "";
      //audioRef.current.load();
      audioRef.current.currentTime = 0;
      setCurrentTime(0); // Reset the current time for the new track
      setProgress(0); // Reset the progress for the new track
       if (isPlaying) {
         audioRef.current.play();
       }
    }
  }, [currentTrackIndex, tracks]);

  return (
    <>
      <div className="flex flex-col w-screen items-center justify-center text-foreground max-h-[150px] md:max-h-[0px] fixed bottom-0 left-0">
        <div className="max-w-screen w-full space-y-4">
          <Card>
            <CardContent className="p-0 grid grid-rows-2 md:grid-cols-4 gap-3">
              <div id="title-art" className="col-span-1 flex items-center gap-3 pl-2">
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
                  <p className="text-muted-foreground text-sm">
                    {tracks[currentTrackIndex]?.artist || "Person Name"}
                  </p>
                </div>
              </div>

              <div id="controls-progress" className="col-span-2 relative mr-2 flex flex-col items-center px-4 pb-4 md:p-0">
                {/* controls */}
                <div id="controls" className="">
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
                <div id="progress" className="w-full">
                  <Slider
                    value={[progress]}
                    onValueChange={handleProgressChange}
                    max={duration}
                    step={1}
                    className='h-1'
                  />
                  <div className="text-sm text-muted-foreground flex justify-between">
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
    </>
  );
}
