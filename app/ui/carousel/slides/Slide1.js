"use client";

import Container from "../../container/container";
import Button from "../../button/button";
import Image from "next/image";

import HOME from "@/store/home/HOME";

import { motion } from "motion/react";


export default function Slide1() {
  return (
    <Container className="p-12">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="font-[family-name:var(--font-raleway)] font-semibold text-5xl md:text-6xl pb-7 max-w-2xl"
      >
        {HOME.main.hero.title}
      </motion.h1>
      <p
        className="font-[family-name:var(--font-montserrat)] max-w-lg"
      >
        {HOME.main.hero.subtitle
          .split(" ")
          .map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.7+(i / 30),
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <Button
          href={HOME.main.hero.buttonLink}
          colour="blue"
          className="mt-4"
          style={{ zIndex: 1 }}
        >
          {HOME.main.hero.button}
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Image
          src={`https://almasjid-site.s3.eu-north-1.amazonaws.com/${HOME.main.hero.image}`}
          width={600}
          height={600}
          className="hidden md:block mix-blend-multiply w-auto h-auto absolute bottom-0 right-[-4em] z-0 pointer-events-none"
          alt="masjid"
        />
        <Image
          src={`https://almasjid-site.s3.eu-north-1.amazonaws.com/${HOME.main.hero.image}`}
          width={400}
          height={400}
          className="block md:hidden mix-blend-multiply w-auto h-auto absolute bottom-0 right-[-1em] z-0 pointer-events-none"
          alt="masjid"
        />
      </motion.div>
    </Container>
  );
}
