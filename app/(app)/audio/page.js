import AlbumView from "@/app/ui/audioPlayer/AlbumView";

import AUDIO from "@/store/audio/audio";

export const metadata = {
  title: 'Audio Lectures',
  description: 'Audio Lectures at Al Masjid'
}

export default function AudioPage() {
  return (
    <>
      <AlbumView className={"mt-8 mb-[15vh]"} albums={AUDIO} />
    </>
  );
}
