import { Metadata } from "next";

import LiveStream from "./ui/liveStream/liveStream";
import Carousel from "./ui/carouselCard/carousel";
import Community from "./ui/community/community";
import ClassesSection from "./ui/classes/classes";
import ServicesSection from "./ui/services/services";

export const metadata = {
  title: "AlMasjid - Empowering Faith, Building Community, Inspiring Harmony",
  description: "Serving the Community",
};

export default function Home() {
  return (
    <>
      <Carousel />

      <ClassesSection bg={true}/>

      <ServicesSection bg={true}/>

      <LiveStream />

      <Community />
    </>
  );
}