import AlbumView from "@/app/ui/audioPlayer/AlbumView";
import AudioPlayer from "@/app/ui/audioPlayer/AudioPlayer.js";
import AUDIO from "@/store/audio/audio";

export default function AudioPage() {
  return (
    <>
    <span className="bg-gradient-to-tl from-[#FDFAF6] to-[#F3E9DE] via-[#F9F2EB] fixed top-0 left-0 w-screen h-screen z-[-1] opacity-55"/>
      <AlbumView className={'mt-8 mb-[15vh]'} albums={AUDIO}/>
      <AudioPlayer />
    </>
  );
}
