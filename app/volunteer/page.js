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
    <div className="items-center justify-items-center font-[family-name:var(--font-raleway)]">
      <EmblaCarousel options={OPTIONS}>
        <CarouselSlides key={1}>
          <Container className="p-12">
            <h1 className="font-[family-name:var(--font-raleway)] font-semibold text-5xl md:text-6xl pb-7 max-w-2xl">
              Welcome to Your Masjid
            </h1>
            <p className="font-[family-name:var(--font-montserrat)] max-w-lg">
              AlMasjid is your online hub for Islamic education, spiritual
              development and growth, managed by a panel of qualified Imams and
              experienced scholars. Explore our website to discover something
              for you.
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
              src={"/hero.png"}
              width={600}
              height={600}
              className="hidden md:block mix-blend-multiply w-auto h-auto absolute bottom-0 right-[-4em] z-0 pointer-events-none"
              alt="masjid"
            />
            <Image
              src={"/hero.png"}
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
            image={"/quran.png"}
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
            link={"/classes/arabic-kids"}
            caption="Limited spaces"
            image={"/arabic-kids.png"}
          >
            Learn the basics of Arabic grammar and syntax to understand the
            Qur’an, hadith, as well as key texts in Islamic jurisprudence for
            teens aged 12-14.
          </CarouselCard>
        </CarouselSlides>
      </EmblaCarousel>
    </div>
  );
}
