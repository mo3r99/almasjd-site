import Heading from "../../ui/heading/heading";
import Lesson from "../../ui/lesson/lesson";
import Container from "../../ui/container/container";
import Breadcrumbs from "../../ui/breadcrumb/breadcrumbs";
import Community from "../../ui/community/community";
import CarouselCard from "../../ui/carouselCard/carouselCard";
import EmblaCarousel from "../../ui/carousel/EmblaCarousel";
import CarouselSlides from "../../ui/carousel/CarouselSlides";

import placeholderImg from '@/assets/placeholder.png'
import vidlessonsImg from '@/assets/video-lessons.png'
import pdfLibaryImg from '@/assets/pdf-library.png'
import tajweedSeriesImg from '@/assets/tajweed-series.jpg'
import remindersImg from '@/assets/reminders.jpg'
import storiesProphetsImg from '@/assets/stories-prophets.jpg'
import lecturesImg from '@/assets/lectures.jpg'

export const metadata = {
  title: "Lessons",
};

export default function Lessons() {
  return (
    <>
      <Breadcrumbs className="mx-auto my-8" />

      <main className="items-center justify-items-center font-[family-name:var(--font-raleway)]">
        <EmblaCarousel options={{ loop: true }} className={"md:pt-0"}>
          <CarouselSlides key={1}>
            <CarouselCard
              clip={true}
              title={"Stories of the Four Greatest Muslims"}
              type="r"
              link={"/lessons/four-greatest-muslims"}
              image={placeholderImg.src}
            >
              The sacrifices they made and why the Muslim ummah has held them in
              the highest regard for over 14 centuries
            </CarouselCard>
          </CarouselSlides>

          <CarouselSlides key={2}>
            <CarouselCard
              clip={true}
              title={"Video Lessons"}
              type="l"
              link={"https://youtube.com/almasjid"}
              image={vidlessonsImg.src}
            >
              Explore our collection of Islamic video lessons designed to deepen
              your understanding of the faith.
            </CarouselCard>
          </CarouselSlides>

          <CarouselSlides key={3}>
            <CarouselCard
              clip={true}
              title={"PDF Library"}
              type="l"
              link={"/lessons/pdf-library"}
              image={pdfLibaryImg.src}
            >
              Explore our collection of Islamic video lessons designed to deepen
              your understanding of the faith.
            </CarouselCard>
          </CarouselSlides>
        </EmblaCarousel>
      </main>

      {/* <span className="w-[80vw] h-[1px] max-w-5xl bg-slate-300 mx-auto my-4"></span> */}

      <div className="width-[100%] bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 text-black">
        <Container>
          <Heading className="relative mx-6 md:mx-0 mt-12 mb-8 text-center">
            All Lessons
          </Heading>

          <section className="flex-wrap grid md:grid-cols-3 gap-x-8 gap-y-[3.3rem] mb-10 mx-6">
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
              image={vidlessonsImg.src}
            >
              Explore our collection of Islamic video lessons designed to deepen
              your understanding of the faith.
            </Lesson>

            <Lesson
              href={"/lessons/pdf-library"}
              title="PDF Library"
              image={pdfLibaryImg.src}
            >
              Access our library of Islamic PDFs, featuring a variety of
              resources.
            </Lesson>

            <Lesson
              href={"/lessons/four-greatest-muslims"}
              title="Tajweed Series"
              image={tajweedSeriesImg.src}
            >
              Enhance your Qur’anic recitation with our Tajweed Series,
              featuring audio lessons which will guide you through the rules and
              principles of Tajweed.
            </Lesson>

            <Lesson
              href={"/lessons/reminders"}
              title="Reminders"
              image={remindersImg.src}
            >
              Stay spiritually motivated with our collection of Islamic
              reminders.
            </Lesson>

            <Lesson
              href={"/lessons/prophets-stories"}
              title="Stories of the Prophets"
              image={storiesProphetsImg.src}
            >
              Delve into the inspiring Stories of the Prophets, exploring their
              lives, lessons, and the timeless wisdom they offer.
            </Lesson>

            <Lesson
              href={"/lessons/lectures"}
              title="Lectures by Dr. Mawlana Nasser Rashid"
              image={lecturesImg.src}
            >
              A collection of insightful lectures by Dr. Nasser Rashid, covering
              a wide range of Islamic topics.
            </Lesson>
          </section>
        </Container>
      </div>
      <Community>
        Stay up to date about our latest lessons. We will never spam you.
      </Community>
    </>
  );
}
