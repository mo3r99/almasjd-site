'use client'

import Link from 'next/link'
import Image from "next/image";

import links from "../../lib/links";

import { NavLinksDesktop, NavLinksMobile } from "./navLink";
import MobileNav from "./mobileNav";

import { motion } from "motion/react";

export default function Header() {
  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween"}}
        className="p-2 flex flex-col items-center text-sm font-[family-name:var(--font-raleway)] z-20"
      >
        <Link href={"/"}>
          <Image
            className="pb-5 w-auto h-auto pointer-events-none hidden md:block"
            src={'https://almasjid-site.s3.eu-north-1.amazonaws.com/logo-dk.webp'}
            width={66}
            height={73}
            alt={"Almasjid logo"}
            priority
            unoptimized
            style={{width: '128px', height: '161px'}}
          />
          <Image
            className="pb-5 pointer-events-none block md:hidden w-auto h-auto"
            src={'https://almasjid-site.s3.eu-north-1.amazonaws.com/logo-m.webp'}
            width={60}
            height={66.07899255867201}
            alt={"Almasjid logo"}
            priority
            unoptimized
            style={{width: '64px', height: '90.5'}}
          />
        </Link>
        <motion.div initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", delay: 0.3}}>
          <ul className="hidden md:flex flex-row font-medium uppercase tracking-wide max-w-screen-lg w-[90vw] justify-evenly nav-ul flex-wrap">
            <NavLinksDesktop links={links} />
          </ul>
        </motion.div>

        <MobileNav links={links} />

        <motion.span initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ type: "spring", delay: 0.8, duration: 0.8, }}
        className="w-[80vw] h-[1px] max-w-5xl bg-slate-300 m-0 block md:mt-4"></motion.span>
      </motion.nav>
    </>
  );
}
