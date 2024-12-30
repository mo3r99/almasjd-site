
import { Metadata } from "next";

import LiveStream from "./ui/liveStream/liveStream";
import Carousel from "./ui/carouselCard/carousel";
import Community from "./ui/community/community";
import Classes from "./ui/classes/classes";

export const metadata = {
  title: 'AlMasjid - Empowering Faith, Building Community, Inspiring Harmony',
  description: "Serving the Community",
};

export default function Home() {
  return (
    <>
      <Carousel />

      <Classes />

      <LiveStream />

      <Community />
    </>
  );
}
