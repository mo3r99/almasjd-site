import { Metadata } from "next";

import LiveStream from "./ui/liveStream/liveStream";
import Carousel from "./ui/carouselCard/carousel";
import CarouselCard from "./ui/carouselCard/carouselCard";
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
      <Carousel home={true} >
      <CarouselCard
      home={true}
          title={"Arabic for Kids"}
          type="r"
          link={"/classes/arabic-kids"}
          caption="Limited spaces"
          image={"/arabic-kids.png"}
        >
          Learn the basics of Arabic grammar and syntax to understand the
          Qur’an, hadith, as well as key texts in Islamic jurisprudence for
          teens aged 12-14.
        </CarouselCard>

        <CarouselCard
        home={true}
          title={"Islamic Studies for Children"}
          type="l"
          link={"/classes/maktab"}
          caption="Limited spaces"
          image={"/quran.png"}
        >
          A well-structured program for children aged 7-14, guided by
          experienced teachers to nurture faith and learning.
        </CarouselCard>
      </Carousel>

      <ClassesSection bg={true}/>

      <ServicesSection bg={true}/>

      <LiveStream />

      <Community />
    </>
  );
}