import { Metadata } from "next";

import LiveStream from "./ui/liveStream/liveStream";
import EmblaCarousel from "./ui/carousel/EmblaCarousel";
import CarouselCard from "./ui/carouselCard/carouselCard";
import CarouselSlides from "./ui/carousel/CarouselSlides";
import Image from "next/image";
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

const OPTIONS = { loop: true };

import bsmImg from '@/assets/bsm.png'
import heroImg from '@/assets/hero.png'
import quranImg from '@/assets/quran.png'
import arabicKidsImg from '@/assets/arabic-kids.png'
import vidLessonsImg from '@/assets/video-lessons.png'
import pdfLibraryImg from '@/assets/pdf-library.png'

export default function Home() {
  return (
    <>
      <main className="items-center justify-items-center font-[family-name:var(--font-raleway)]">
        <Image
          src={bsmImg}
          width={500}
          height={200}
          alt="bismillah"
          className="hidden w-auto h-auto md:block mix-blend-multiply pointer-events-none pt-5 mx-auto"
          priority
        />

        <Image
          src={bsmImg}
          width={270}
          height={108}
          alt="bismillah"
          className="block w-auto h-auto md:hidden mix-blend-multiply pointer-events-none pt-5 mx-auto"
          priority
        />
        <EmblaCarousel options={OPTIONS} className={'md:pt-0'}>
          <CarouselSlides key={1}>
            <Container className="p-12">
              <h1 className="font-[family-name:var(--font-raleway)] font-semibold text-5xl md:text-6xl pb-7 max-w-2xl">
                Welcome to Your Masjid
              </h1>
              <p className="font-[family-name:var(--font-montserrat)] max-w-lg">
                AlMasjid is your online hub for Islamic education, spiritual
                development and growth, managed by a panel of qualified Imams
                and experienced scholars. Explore our website to discover
                something for you.
              </p>
              <Button
                href="/classes"
                colour="blue"
                className="mt-4"
                style={{ zIndex: 1 }}
              >
                See our Classes
              </Button>
              <Image
                src={heroImg}
                width={600}
                height={600}
                className="hidden md:block mix-blend-multiply w-auto h-auto absolute bottom-0 right-[-4em] z-0 pointer-events-none"
                alt="masjid"
              />
              <Image
                src={heroImg}
                width={400}
                height={400}
                className="block md:hidden mix-blend-multiply w-auto h-auto absolute bottom-0 right-[-1em] z-0 pointer-events-none"
                alt="masjid"
              />
            </Container>
          </CarouselSlides>

          <CarouselSlides key={2}>
            <CarouselCard
              home={true}
              title={"Islamic Studies for Children"}
              type="l"
              link={"/classes/maktab"}
              caption="Limited spaces"
              image={quranImg}
            >
              A well-structured program for children aged 7-14, guided by
              experienced teachers to nurture faith and learning.
            </CarouselCard>
          </CarouselSlides>

          <CarouselSlides key={3}>
            <CarouselCard
              home={true}
              title={"Arabic for Kids"}
              type="r"
              link={"/classes/arabicForKids"}
              caption="Limited spaces"
              image={arabicKidsImg}
            >
              Learn the basics of Arabic grammar and syntax to understand the
              Qur’an, hadith, as well as key texts in Islamic jurisprudence for
              teens aged 12-14.
            </CarouselCard>
          </CarouselSlides>
        </EmblaCarousel>
      </main>

      <ClassesSection bg={true} />

      <section className="w-[100%] bg-zinc-900">
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
              image={vidLessonsImg.src}
            >
              Explore our collection of Islamic video lessons designed to deepen
              your understanding of the faith.
            </Lesson>

            <Lesson
              href={"/lessons/pdf-library"}
              title="PDF Library"
              image={pdfLibraryImg.src}
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
