import Heading from "../../ui/heading/heading";
import Lesson from "../../ui/lesson/lesson";
import Container from "../../ui/container/container";
import Breadcrumbs from "../../ui/breadcrumb/breadcrumbs";
import Community from "../../ui/community/community";
import CarouselCard from "../../ui/carouselCard/carouselCard";
import EmblaCarousel from "../../ui/carousel/EmblaCarousel";
import CarouselSlides from "../../ui/carousel/CarouselSlides";

import lesson from "@/store/lessons/lessons.js";
const LESSON = lesson.LESSON;

const placeholderImg =
  "https://almasjid-site.s3.eu-north-1.amazonaws.com/placeholder.png";

export const metadata = {
  title: "Lessons",
};

export default function Lessons() {
  return (
    <>
      <Breadcrumbs className="mx-auto my-8" />

      <main className="items-center justify-items-center font-[family-name:var(--font-raleway)]">
        <EmblaCarousel options={{ loop: true }} className={"md:pt-0"}>
          {LESSON.slice(0, 3).map((lesson) => {
            return(
            <CarouselSlides key={lesson.id}>
              <CarouselCard
                clip={true}
                title={lesson.title}
                type={lesson.id % 2 !== 0 ? 'r' : 'l'}
                link={!lesson.external ? `/lessons/${lesson.slug}` : lesson.slug}
                image={!lesson.image ? placeholderImg : lesson.image}
              >
                {lesson.description}
              </CarouselCard>
            </CarouselSlides>)
          })}
          {/* <CarouselSlides key={1}>
            <CarouselCard
              clip={true}
              title={"Stories of the Four Greatest Muslims"}
              type="r"
              link={"/lessons/four-greatest-muslims"}
              image={placeholderImg}
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
              image={vidlessonsImg}
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
              image={pdfLibaryImg}
            >
              Explore our collection of Islamic video lessons designed to deepen
              your understanding of the faith.
            </CarouselCard>
          </CarouselSlides> */}
        </EmblaCarousel>
      </main>

      {/* <span className="w-[80vw] h-[1px] max-w-5xl bg-slate-300 mx-auto my-4"></span> */}

      <div className="width-[100%] bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 text-black">
        <Container>
          <Heading className="relative mx-6 md:mx-0 mt-12 mb-8 text-center">
            All Lessons
          </Heading>

          <section className="grid md:grid-cols-3 gap-x-8 gap-y-[3.3rem] mb-10 mx-6">
            {LESSON.map((lesson) => {
              return (
                <Lesson
                  href={!lesson.external ? `/lessons/${lesson.slug}` : lesson.slug}
                  title={lesson.title}
                  external={lesson.external}
                  image={lesson.image}
                  key={lesson.id}
                >
                  {lesson.description}
                </Lesson>
              );
            })}
          </section>
        </Container>
      </div>
      <Community>
        Stay up to date about our latest lessons. We will never spam you.
      </Community>
    </>
  );
}
