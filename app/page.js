import { Metadata } from "next";

import LiveStream from "./ui/liveStream/liveStream";
import Carousel from "./ui/carouselCard/carousel";
import CarouselCard from "./ui/carouselCard/carouselCard";
import Community from "./ui/community/community";
import ClassesSection from "./ui/classes/classes";
import ServicesSection from "./ui/services/services";
import Heading from "./ui/heading/heading";
import Lesson from "./ui/lesson/lesson";
import Container from "./ui/container/container";
import Button from "./ui/button/button";

export const metadata = {
  title: "AlMasjid - Empowering Faith, Building Community, Inspiring Harmony",
  description: "Serving the Community",
};

export default function Home() {
  return (
    <>
      <Carousel home={true}>
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

      <ClassesSection bg={true} />

      <section className="w-[100vw] bg-zinc-900">
        <Container className="text-white max-w-5xl mx-auto">
          <Heading className="relative mx-6 md:mx-0 mt-10 mb-8 text-center">
            Featured Lessons
          </Heading>
          <div className="flex-wrap grid md:grid-cols-3 gap-x-8 gap-y-10 mb-10 mx-6 ">
            <Lesson
              href={"/lessons/four-greatest-muslims"}
              title="Stories of the Four Greatest Muslims"
            >
              Learn why Allāh granted them the seal of approval and why the
              Muslim ummah has held them in the highest regard for over 14
              centuries.
            </Lesson>

            <Lesson
              href={"https://youtube.com/almasjid"}
              title="Video Lessons"
              external={true}
              image={"/video-lessons.png"}
            >
              Explore our collection of Islamic video lessons designed to deepen
              your understanding of the faith.
            </Lesson>

            <Lesson
              href={"/lessons/pdf-library"}
              title="PDF Library"
              image={"/pdf-library.png"}
            >
              Access our library of Islamic PDFs, featuring a variety of
              resources.
            </Lesson>
          </div>
          <Button
            href={"/lessons"}
            colour={"orange"}
            className={"mx-auto my-8"}
          >
            See all lessons
          </Button>
        </Container>
      </section>

      <ServicesSection bg={true} />

      <LiveStream />

      <Community />
    </>
  );
}
