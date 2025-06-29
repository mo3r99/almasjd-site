import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

import links from "@/app/lib/links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} flex-grow-1 px-[10vw] w-[100vw] p-5 text-white grid grid-cols-1 md:grid-cols-5`}
    >
      <div className="md:col-span-2">
        <div className="flex relative w-[190px] md:w-[270px] mb-4">
          <Image
            className="pointer-events-none hidden md:block w-auto h-auto"
            src={
              "https://almasjid-site.s3.eu-north-1.amazonaws.com/white-logo.png"
            }
            width={128}
            height={141}
            alt={"Almasjid logo"}
            unoptimized
            style={{ width: "128px", height: "141px" }}
          />
          <Image
            className="pointer-events-none block md:hidden w-auto h-auto"
            src={
              "https://almasjid-site.s3.eu-north-1.amazonaws.com/white-logo.png"
            }
            width={64}
            height={64}
            alt={"Almasjid logo"}
            unoptimized
            style={{ width: "64px", height: "70.5px" }}
          />
          {/* <h1 className="text-3xl md:text-4xl font-medium font-[family-name:var(--font-raleway)] absolute bottom-0 right-0">
            Almasjid
          </h1> */}
        </div>
        <div className="font-[family-name:var(--font-montserrat)] pb-4">
          <p className="pb-2">
            © Copyright Al Masjid 2015-{currentYear}. All rights reserved.
          </p>
          <Link
            target="_blank"
            href={
              "https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC052744"
            }
          >
            <Image
              src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/small-green-landscape.png"}
              width={250}
              height={87.5}
              unoptimized
              style={{ width: "250px", height: "87.5px" }}
              alt="Al Masjid OSCR Logo"
            />
          </Link>
        </div>
      </div>

      <div className="md:col-span-1"></div>

      <div className="md:col-span-1">
        <h3 className="text-xl font-[family-name:var(--font-raleway)] font-semibold pb-3 mt-10">
          Explore
        </h3>
        <ul className="font-[family-name:var(--font-montserrat)]">
          <li>
            <Link className="pb-1 hover:underline hover:text-cyan-50" href="/">
              <p>Home</p>
            </Link>
          </li>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  className="pb-1 hover:underline hover:text-cyan-50"
                  href={link.href}
                >
                  <p>{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:col-span-1">
        <h3 className="text-xl font-[family-name:var(--font-raleway)] font-semibold pb-3 mt-10">
          Follow Us
        </h3>
        <ul className="flex mb-4">
          <a
            target="_blank"
            href={"https://facebook.com/almasjid.co.uk.official"}
          >
            <Image
              className="mx-1 w-auto h-auto"
              src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/fb.png"}
              width={30}
              height={30}
              alt="facebook"
              unoptimized
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a target="_blank" href={"https://x.com/AlMasjidOnline"}>
            <Image
              className="mx-1 w-auto h-auto"
              src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/x.png"}
              width={30}
              height={30}
              alt="Twitter/X"
              unoptimized
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a target="_blank" href={"https://whatsapp.com/channel/0029VaxQMtW6LwHl1qEtBY0x"}>
            <Image
              className="mx-1 w-auto h-auto invert"
              src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/Whatsapp.png"}
              width={30}
              height={30}
              alt="WhatsApp"
              unoptimized
              style={{ width: "32px", height: "32px" }}
            />
          </a>
          <a target="_blank" href={"mailto:salam@almasjid.co.uk"}>
            <Image
              className="mx-1 w-auto h-auto"
              src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/mail.png"}
              width={30}
              height={30}
              alt="E-Mail"
              unoptimized
              style={{ width: "32px", height: "32px" }}
            />
          </a>
        </ul>
      </div>
    </footer>
  );
}
