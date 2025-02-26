import AlbumView from "@/app/ui/audioPlayer/AlbumView";

import FullScreenPlayer from "@/app/ui/audioPlayer/FullScreenPlayer";
import AUDIO from "@/store/audio/audio";

export default function AudioPage() {
  return (
    <>
      <AlbumView className={"mt-8 mb-[15vh]"} albums={AUDIO} />
    </>
  );
}
