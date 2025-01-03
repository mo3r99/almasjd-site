"use client";


import Image from "next/image";
import Container from "../container/container";
import Button from "../button/button";
import CarouselCard from "./carouselCard";
import { useRef, useState } from "react";

import styles from "./carousel.module.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Carousel({ children, home, className }) {
  const [showR, setShowR] = useState(true);
  const [showL, setShowL] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scroller = useRef(null);

  const checkShow = function (scrollLeft, width) {
    if (scrollLeft > width * 2 - (width - 30)) {
      setShowR(false);
    } else if (scrollLeft < width - 30) {
      setShowL(false);
    } else {
      setShowL(true);
      setShowR(true);
    }
  };

  const autoScroll = function () {
    const { scrollLeft } = scroller.current;

    if (!hasScrolled) {
      if (showR != false) {
        scroller.current.scrollTo({
          left: scrollLeft + (scroller.current.offsetWidth * 2) / 3,
          behavior: "smooth",
        });
      } else {
        scroller.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setShowL(false);
        setShowR(true);
      }
    }
  };

  setTimeout(() => {
    autoScroll();
  }, 10000);

  const onClickScroll = function (direction) {
    const { scrollLeft } = scroller.current;
    switch (direction) {
      case "forwards":
        // Scroll right by 500 pixels
        scroller.current.scrollTo({
          left: scrollLeft + (scroller.current.offsetWidth * 2) / 3,
          behavior: "smooth",
        });
        break;

      case "backwards":
        // Scroll left by 500 pixels
        scroller.current.scrollTo({
          left: scrollLeft - (scroller.current.offsetWidth * 2) / 3,
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
    checkShow(scrollLeft, scroller.current.offsetWidth);
  };

  return (
    <main>
      {home && (
        <>
          <Image
            src={"/bsm.png"}
            width={500}
            height={200}
            alt="bismillah"
            className="hidden md:block mix-blend-multiply pointer-events-none pt-5 mx-auto"
          />

          <Image
            src={"/bsm.png"}
            width={270}
            height={108}
            alt="bismillah"
            className="block md:hidden mix-blend-multiply pointer-events-none pt-5 mx-auto"
          />
        </>
      )}

      <div
        ref={scroller}
        onScroll={(event) => {
          onClickScroll(event);
          setHasScrolled(true);
        }}
        className={cn(
          "lg:min-h-[60vh] max-h-[60vh] min-h-[700px] md:min-h-[600px] lg:max-h-[500px] max-w-5xl mx-auto relative overflow-x-scroll overflow-y-hidden flex",
          className
        )}
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {home && (
          <section
            style={{ scrollSnapAlign: "start" }}
            className="lg:min-h-[60vh] lg:max-h-[500px] min-w-[100%] max-w-5xl mx-auto relative"
          >
            <Container className="p-12">
              <h1
                className="font-[family-name:var(--font-raleway)] font-semibold text-5xl md:text-6xl pb-7 max-w-2xl"
              >
                Welcome to Your Masjid
              </h1>
              <p className="font-[family-name:var(--font-montserrat)] max-w-lg">
                AlMasjid is your online hub for Islamic education, spiritual
                development and growth, managed by a panel of qualified Imams
                and experienced scholars. Explore our website to discover
                something for you.
                {/* <br />
                All of our services are free for the family of the Prophet ﷺ.{" "}
                <br />
                <Link className="underline" href="/about/saadat">
                  Learn more.
                </Link> */}
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
                className="hidden md:block mix-blend-multiply w-auto h-auto absolute bottom-0 right-0 z-0 pointer-events-none"
                alt="masjid"
              />
              <Image
                src={"/hero.png"}
                width={400}
                height={400}
                className="block md:hidden mix-blend-multiply w-auto h-auto absolute bottom-0 right-0 z-0 pointer-events-none"
                alt="masjid"
              />
            </Container>
          </section>
        )}
        {children}
      </div>

      {/* Forwards Button */}

      <div
        className={`${showR ? "opacity-100" : "opacity-0"} ${
          styles.arrows
        } transition-all duration-300 absolute cursor-pointer right-[1em] top-[80%] smd:top-[50%] scale-[2] mr-2`}
      >
        <svg
          onClick={() => onClickScroll("forwards")}
          width="1em"
          height="1em"
          fill=""
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>

      {/* Backwards Button */}
      <div
        className={`${showL ? "opacity-100" : "opacity-0"} ${
          styles.arrows
        } transition-all duration-300 cursor-pointer absolute left-[1em] top-[80%] smd:top-[50%] scale-[2] ml-2`}
      >
        <svg
          onClick={() => onClickScroll("backwards")}
          width="1em"
          height="1em"
          fill=""
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </div>
    </main>
  );
}
