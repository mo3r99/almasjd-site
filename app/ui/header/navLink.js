"use client";

import { Link } from 'next-view-transitions'
import { usePathname } from "next/navigation";

export function NavLinksDesktop({ links }) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`duration-250 transition-all hover:text-weborange group  ease-in-out ${
          pathname == "/" && "text-teal-600 font-bold"
        } px-3`}
      >
        <span className="bg-left-bottom bg-gradient-to-r from-tradewind to-weborange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Home
        </span>
      </Link>

      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`px-3 group transition-all duration-250 hover:text-weborange hover:font-bold ease-in-out ${
              pathname.startsWith(link.href)
                ? "text-teal-600 font-bold"
                : "text-black"
            }`}
          >
            <p className="hidden md:block bg-left-bottom bg-gradient-to-r from-tradewind to-weborange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}

export function NavLinksMobile({links}) {
  const pathname = usePathname();

  return (
    <>
      <li key={"Home"}>
        <Link
          className={`transition-all duration-500 ${
            pathname == "/" ? "text-teal-200 font-bold" : "text-white"
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
                pathname == link.href ? "text-teal-200 font-bold" : "text-white"
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
    </>
  );
}
