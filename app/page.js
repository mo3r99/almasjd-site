import Image from "next/image";
import Header from "./ui/header/header";

import { Metadata } from "next";
import Container from "./ui/container/container";
import Link from "next/link";
import Button from "./ui/button/button";
import Heading from "./ui/heading/heading";
import LiveStream from "./ui/liveStream/liveStream";
import CarouselCard from "./ui/carouselCard/carouselCard";

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
      <main>
        <div
          style={{ scrollSnapType: "x mandatory" }}
          className="lg:min-h-[70vh] lg:max-h-[500px] md:h-[80vh] max-w-5xl mx-auto relative overflow-x-scroll overflow-y-hidden flex"
        >
          <section
            style={{ scrollSnapAlign: "start" }}
            className="min-h-[770px] lg:min-h-[70vh] lg:max-h-[500px] md:h-[80vh] min-w-[100%] max-w-5xl mx-auto relative"
          >
            <Image
              src={"/bsm.png"}
              width={500}
              height={200}
              alt="bismillah"
              className="mix-blend-multiply pt-5 mx-auto"
            />
            <Container className="p-12">
              <h1 className="font-[family-name:var(--font-raleway)] font-semibold text-5xl md:text-6xl pb-7 max-w-2xl">
                Welcome to Your Masjid
              </h1>
              <p className="font-[family-name:var(--font-montserrat)] max-w-lg">
                AlMasjid is a nonprofit organisation committed to supporting
                families who face barriers to accessing mosque services.
                <br />
                All of our services are free for the family of the Prophet ﷺ.
              </p>
              <Button href="/classes" colour="blue" style={{ zIndex: 1 }}>
                See our Classes
              </Button>
              <Image
                src={"/hero.png"}
                width={600}
                height={600}
                className="mix-blend-multiply w-auto h-auto absolute bottom-0 right-0 z-0 pointer-events-none"
                alt="masjid"
              />
            </Container>
          </section>

          <CarouselCard
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
            title={"Islamic Studies for Children"}
            type="l"
            link={"/classes/maktab"}
            caption="Limited spaces"
            image={"/quran.png"}
          >
            Learn the basics of Arabic grammar and syntax to understand the
            Qur’an, hadith, as well as key texts in Islamic jurisprudence for
            teens aged 12-14.
          </CarouselCard>
        </div>
      </main>
      <a className="group text-pink-500 transition-all duration-300 ease-in-out" href="#">
  <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    This text gets 'underlined' on hover
  </span>
</a>
      <LiveStream />
    </>
  );
}
