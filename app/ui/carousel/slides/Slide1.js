"use client";

import Container from "../../container/container";
import Button from "../../button/button";
import Image from "next/image";

import heroImg from "@/assets/hero.png";

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
        {"Welcome to Your Masjid".split(" ").map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.h1>
      <p
        className="font-[family-name:var(--font-montserrat)] max-w-lg"
      >
        {`AlMasjid is your online hub for Islamic education, spiritual development and growth, managed by a panel of qualified Imams and experienced scholars. Explore our website to discover something for you.`
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
          href="/classes"
          colour="blue"
          className="mt-4"
          style={{ zIndex: 1 }}
        >
          See our Classes
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
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
      </motion.div>
    </Container>
  );
}
