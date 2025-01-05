import Link from "next/link";
import Image from "next/image";

import links from "../../lib/links";

import logoImg from '@/assets/am-logos/logo.png'
import { NavLinksDesktop, NavLinksMobile } from "./navLink";
import MobileNav from "./mobileNav";

export default function Header() {
  return (
    <nav className="p-2 flex flex-col items-center text-sm font-[family-name:var(--font-raleway)] z-20">
      <Link href={"/"}>
        <Image
          className="pb-5 w-auto h-auto pointer-events-none hidden md:block"
          src={logoImg}
          width={66}
          height={73}
          alt={"Almasjid logo"}
          priority
        />
        <Image
          className="pb-5 pointer-events-none block md:hidden w-auto h-auto"
          src={logoImg}
          width={60}
          height={66.07899255867201}
          alt={"Almasjid logo"}
          priority
        />
      </Link>
      <div>
        <ul className="hidden md:flex flex-row font-medium uppercase tracking-wide max-w-screen-lg w-[90vw] justify-evenly nav-ul flex-wrap">
          <NavLinksDesktop links={links} />
        </ul>
      </div>

      <MobileNav links={links}/>

      <span className="w-[80vw] h-[1px] max-w-5xl bg-slate-300 m-0 block md:mt-4"></span>
    </nav>
  );
}
