"use client";

import Image from "next/image";
import Container from "../container/container";
import Button from "../button/button";
import CarouselCard from "./carouselCard";
import { use, useRef, useState } from "react";

export default function Carousel() {
  const [showR, setShowR] = useState(true);
  const [showL, setShowL] = useState(true);

  const scroller = useRef(null);

  const onClickScroll = function (direction) {
    const { scrollLeft } = scroller.current
    console.log("Current scrollLeft:", scrollLeft);
    switch (direction) {
      case "forwards":
        // Scroll right by 500 pixels
        scroller.current.scrollTo({
          left:
            scrollLeft +
            ((scroller.current.offsetWidth*2)/3),
          behavior: "smooth",
        });
        break;

      case "backwards":
        // Scroll left by 500 pixels
        scroller.current.scrollTo({
          left:
            scrollLeft -
            ((scroller.current.offsetWidth*2)/3),
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  };

  return (
    <main>
      <div
        ref={scroller}
        onScroll={onClickScroll}
        className="lg:min-h-[70vh] lg:max-h-[500px] md:h-[80vh] max-w-5xl mx-auto relative overflow-x-scroll overflow-y-hidden flex"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth", // You could add smooth scrolling here if needed
        }}
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

      {/* Forwards Button */}
      {showR && (
        <div className="absolute right-[1em] top-[80%] smd:top-[50%] scale-[2] mr-2">
          <svg
            onClick={() => onClickScroll("forwards")}
            width="1em"
            height="1em"
            fill="#6bbaa7"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>
      )}

      {/* Backwards Button */}
      <div className="absolute left-[1em] top-[80%] smd:top-[50%] scale-[2] ml-2">
        <svg
          onClick={() => onClickScroll("backwards")}
          width="1em"
          height="1em"
          fill="#6bbaa7"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </div>
    </main>
  );
}
