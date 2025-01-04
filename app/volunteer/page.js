import Image from "next/image";
import { Metadata } from "next";
import EmblaCarousel from "../ui/carousel/EmblaCarousel";
import CarouselSlides from "../ui/carousel/CarouselSlides";
import Container from "../ui/container/container";
import Button from "../ui/button/button";
import CarouselCard from "../ui/carouselCard/carouselCard";

export const metadata = {
  title: "Volunteer",
};

const OPTIONS = { loop: true };

export default function Volunteer() {
  return (
    <h1>Volunteer</h1>
  );
}
