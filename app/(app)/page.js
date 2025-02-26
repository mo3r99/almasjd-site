import LiveStream from "@/app/ui/liveStream/liveStream";
import EmblaCarousel from "@/app/ui/carousel/EmblaCarousel";
import CarouselCard from "@/app/ui/carouselCard/carouselCard";
import CarouselSlides from "@/app/ui/carousel/CarouselSlides";
import Image from "next/image";
import Community from "@/app/ui/community/community";
import ClassesSection from "@/app/ui/classes/classes";
import ServicesSection from "@/app/ui/services/services";
import Heading from "@/app/ui/heading/heading";
import Lesson from "@/app/ui/lesson/lesson";
import Container from "@/app/ui/container/container";
import Button from "@/app/ui/button/button";

export const metadata = {
  title: "AlMasjid - Your online Islamic hub",
  description: "Your online hub for Islamic education, spiritual development and growth.",
};

const OPTIONS = { loop: true };

const bsmImg = "https://almasjid-site.s3.eu-north-1.amazonaws.com/bsm.png";


import Slide1 from "@/app/ui/carousel/slides/Slide1";

import HOME from "@/store/home/HOME";
import LS from "@/store/lessons/lessons";
const LESSON = LS.LESSON

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
        <EmblaCarousel options={OPTIONS} className={"md:pt-0"}>
          <CarouselSlides key={1}>
            <Slide1 />
          </CarouselSlides>

          {HOME.main.sections.map((item, index) => {
            return (
              <CarouselSlides key={1 + index}>
                <CarouselCard
                  home={true}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  caption={item.caption}
                  image={`https://almasjid-site.s3.eu-north-1.amazonaws.com/${item.image}`}
                >
                  {item.text}
                </CarouselCard>
              </CarouselSlides>
            );
          })}
        </EmblaCarousel>
      </main>

      {HOME.sections.map((section, index) => {
        switch (section.type) {
          case "classes":
            return <ClassesSection key={index} bg={section.background} />;
          case "lessons":
            return (
              <section key={index} className="w-[100%] bg-zinc-900">
                <Container className="text-white max-w-5xl mx-auto">
                  <Heading className="relative mx-6 md:mx-0 mt-10 mb-8 text-center">
                    Featured Lessons
                  </Heading>
                  <div className="flex-wrap grid md:grid-cols-3 gap-x-8 gap-y-10 mb-10 mx-6 ">
                    {LESSON.slice(0, 3).map((lesson, index) => (
                      <Lesson 
                        key={index}
                        href={`/lessons/${lesson.slug}`}
                        title={lesson.title}
                        image={lesson.image && lesson.image}
                      >
                        {lesson.description}
                      </Lesson>
                    ))}
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
            );
          case "services":
            return <ServicesSection key={index} bg={section.background} />;
          case "livestream":
            return <LiveStream key={index} />;
          case "community":
            return <Community key={index} />;
        }
      })}
    </>
  );
}
