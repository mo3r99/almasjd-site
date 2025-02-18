'use client'

import { useState, createContext, useContext } from "react";

const AudioContext = createContext();

function AudioProvider({ children }) {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <AudioContext.Provider
      value={{
        tracks,
        setTracks,
        currentTrackIndex,
        setCurrentTrackIndex,
        isPlaying,
        setIsPlaying,
        progress,
        setProgress,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

function useAudio() {
  return useContext(AudioContext);
}

export { AudioProvider, useAudio };
