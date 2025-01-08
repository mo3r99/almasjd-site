"use client"

import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import smLogo from '@/assets/am-logos/sm-logo.png'
import {NavLinksMobile} from "./navLink";

export default function MobileNav({links}) {
    const [mobNav, setMobNav] = useState(false);

  return (
    <>
      <div
        className={`${styles.menuToggle} md:hidden absolute left-10 top-10 z-50`}
      >
        <input
          type="checkbox"
          id="menuCheckbox"
          onClick={() => {
            setMobNav((prevMobNav) => {
              return !prevMobNav;
            });
          }}
        />
        <span className={`${mobNav && styles.mobNavOpen3}`}></span>
        <span className={`${mobNav && styles.mobNavOpen2}`}></span>
        <span className={`${mobNav && styles.mobNavOpen1}`}></span>
      </div>

      <div
        className={`${styles.mobNav} ${
          mobNav ? styles.mobNavOpen : styles.mobNavClosed
        } fixed top-0 left-0 w-[100vw] z-40 flex-col items-center h-[100vh] bg-gray-700 justify-center text-white flex md:hidden`}
      >
        <Image
          className="pb-5 pointer-events-none block md:hidden w-auto h-auto"
          src={smLogo}
          width={60}
          height={66.07899255867201}
          alt={"Almasjid logo"}
        />
        <ul className="flex h-[50vh] justify-evenly flex-col items-center font-medium uppercase text-xl">
          <NavLinksMobile links={links} />
        </ul>
      </div>
    </>
  );
}
