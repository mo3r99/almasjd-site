import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} flex-grow-1 px-[10vw] w-[100vw] p-5 text-white grid grid-cols-1 md:grid-cols-5`}
    >
      <div className="md:col-span-2">
        <div className="flex relative w-[190px] md:w-[270px] mb-4">
          <Image
            className="pointer-events-none hidden md:block w-auto h-auto"
            src="/white-logo.png"
            width={75}
            height={83}
            alt={"Almasjid logo"}
          />
          <Image
            className="pointer-events-none block md:hidden w-auto h-auto"
            src="/white-logo.png"
            width={63}
            height={69}
            alt={"Almasjid logo"}
          />
          {/* <h1 className="text-3xl md:text-4xl font-medium font-[family-name:var(--font-raleway)] absolute bottom-0 right-0">
            Almasjid
          </h1> */}
        </div>
        <div className="font-[family-name:var(--font-montserrat)] pb-4">
          <p className="pb-2">
            © Copyright AlMasjid 2015-2024. All rights reserved.
          </p>
          <p>Registered Charity <Link className="text-cyan-100 hover:text-cyan-300 transition-all ease-in-out duration-300 hover:underline" href={'https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC052744'}>SC052744</Link></p>
        </div>
      </div>

      <div className="md:col-span-1"></div>

      <div className="md:col-span-1">
        <h3 className="text-xl font-[family-name:var(--font-raleway)] font-medium pb-3 mt-10">
          Explore
        </h3>
        <ul className="font-[family-name:var(--font-montserrat)]">
          <li>
            <Link className="pb-1" href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="pb-1" href="/classes">
              <p>Classes</p>
            </Link>
          </li>
          <li>
            <Link className="pb-1" href="/lessons">
              <p>Lessons</p>
            </Link>
          </li>
          <li>
            <Link className="pb-1" href="/donate">
              <p>Donate</p>
            </Link>
          </li>
          <li>
            <Link className="pb-1" href="/about">
              <p>About</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:col-span-1">
        <h3 className="text-xl font-[family-name:var(--font-raleway)] font-medium pb-3 mt-10">
          Follow Us
        </h3>
        <ul className="flex mb-4">
          <a target="_blank" href={"https://facebook.com/almasjid.co.uk.official"}>
            <Image
              className="mx-1 w-auto h-auto"
              src={"/fb.png"}
              width={30}
              height={30}
              alt="facebook"
            />
          </a>
          <a target="_blank" href={"https://x.com/AlMasjidOnline"}>
            <Image
              className="mx-1 w-auto h-auto"
              src={"/x.png"}
              width={30}
              height={30}
              alt="Twitter/X"
            />
          </a>
          <a target="_blank" href={"mailto:salam@almasjid.co.uk"}>
            <Image
              className="mx-1 w-auto h-auto"
              src={"/mail.png"}
              width={30}
              height={30}
              alt="E-Mail"
            />
          </a>
        </ul>
      </div>
    </footer>
  );
}