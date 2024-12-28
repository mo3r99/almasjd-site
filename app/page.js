import Image from "next/image";
import Header from "./ui/header/header";

import { Metadata } from "next";
import Container from "./ui/container/container";
import Link from "next/link";
import Button from "./ui/button/button";
import Heading from "./ui/heading/heading";
import LiveStream from "./ui/liveStream/liveStream";
import CarouselCard from "./ui/carouselCard/carouselCard";
import Carousel from "./ui/carouselCard/carousel";

export const metadata = {
  title: {
    template: "%s | Almasjid",
    default: "Almasjid",
  },
  description: "Serving the Community",
  metadataBase: new URL("https://almasjid.co.uk"),
};

export default function Home() {
  return (
    <>
      <Carousel />

      <LiveStream />
    </>
  );
}
