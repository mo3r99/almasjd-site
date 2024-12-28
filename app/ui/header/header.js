"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

import links from "@/app/lib/links";

export default function Header() {
  const [mobNav, setMobNav] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="p-2 flex flex-col items-center text-sm font-[family-name:var(--font-raleway)]">
      <Image
        className="pb-5 pointer-events-none hidden md:block w-auto h-auto"
        src="/logo.png"
        width={68}
        height={75}
        alt={"Almasjid logo"}
      />
      <Image
        className="pb-5 pointer-events-none block md:hidden w-auto h-auto"
        src="/logo.png"
        width={60}
        height={66.07899255867201}
        alt={"Almasjid logo"}
      />
      <div>
        <ul className="hidden md:flex flex-row font-medium uppercase tracking-wide max-w-screen-lg w-[90vw] justify-evenly nav-ul flex-wrap">
          <Link
            href="/"
            className={`duration-500 transition-all ${
              pathname == "/" && "text-teal-600 font-bold"
            } px-3`}
          >
            Home
          </Link>
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 transition-all duration-500 ${
                  pathname == link.href
                    ? "text-teal-600 font-bold"
                    : "text-black"
                }`}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </ul>
      </div>
      <div
        className={`${styles.menuToggle} md:hidden absolute left-10 top-10 z-20`}
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
        } absolute top-0 left-0 w-[100vw] flex-col items-center h-[100vh] bg-gray-700 z-10 justify-center text-white flex md:hidden`}
      >
        <Image
          className="pb-5 pointer-events-none block md:hidden w-auto h-auto"
          src="/sm-logo.png"
          width={60}
          height={66.07899255867201}
          alt={"Almasjid logo"}
        />
        <ul className="flex h-[50vh] justify-evenly flex-col items-center font-medium uppercase text-xl">
          <li key={"Home"}>
            <Link
              className={`transition-all duration-500 ${
                pathname == '/' ? "text-teal-200 font-bold" : "text-white"
              }`}
              href={"/"}
              onClick={() => {
                setMobNav((prevMobNav) => {
                  return !prevMobNav;
                });
              }}
            >
              <p>Home</p>
            </Link>
          </li>
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-500 ${
                    pathname == link.href
                      ? "text-teal-200 font-bold"
                      : "text-white"
                  }`}
                  onClick={() => {
                    setMobNav((prevMobNav) => {
                      return !prevMobNav;
                    });
                  }}
                >
                  <p>{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <span className="w-[80vw] h-[1px] max-w-5xl bg-slate-300 m-0 block md:mt-4"></span>
    </nav>
  );
}
