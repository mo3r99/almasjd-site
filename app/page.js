import Image from "next/image";
import Header from "./ui/header/header";

import { Metadata } from "next";
import Container from "./ui/container/container";
import Link from "next/link";
import Button from "./ui/button/button";
import Heading from "./ui/heading/heading";

export const metadata = {
  title: {
    template: "%s | Almasjid",
    default: "Almasjid",
  },
  description: "Serving the Community",
  metadataBase: new URL("https://almasjid.co.uk"),
};

export default function Home() {
  return (
    <>
    <main>
      <div>
        <section className="min-h-[770px] lg:min-h-[70vh] lg:max-h-[500px] md:h-[80vh] max-w-5xl mx-auto relative">
          <Image
            src={"/bsm.png"}
            width={500}
            height={200}
            alt="bismillah"
            className="mix-blend-multiply pt-5 mx-auto"
          />
          <Container className="p-12">
            <h1 className="font-[family-name:var(--font-raleway)] font-semibold text-6xl pb-7 max-w-2xl">
              Welcome to Your Masjid
            </h1>
            <p className="font-[family-name:var(--font-montserrat)] max-w-lg">
              AlMasjid is a nonprofit organisation committed to supporting
              families who face barriers to accessing mosque services.
              <br />
              All of our services are free for the family of the Prophet ﷺ.
            </p>
            <Button href='/classes' colour='blue' style={{zIndex: 1}}>See our Classes</Button>
            <Image
              src={"/hero.png"}
              width={600}
              height={600}
              className="mix-blend-multiply w-auto h-auto absolute bottom-0 right-0 z-0 pointer-events-none"
              alt="masjid"
            />
          </Container>
        </section>
      </div>
    </main>

    <section className="flex flex-col justify-center items-center p-5 bg-[#07100f] text-white">
      <Heading className="pt-8 pb-2">Live Stream</Heading>
      <p className="font-[family-name:var(--font-montserrat)] pb-8">Join us when we go live!</p>
      <iframe src="https://almasjid.mixlr.com/embed" frameBorder="0" scrolling="no" height="200px" width="100%"></iframe><small><a href="https://mixlr.com/" style={{color: '#1a1a1a', display: 'block', fontFamily: 'Helvetica, sans-serif', fontSize: '11px', textAlign: 'left', padding: '4px 0'}}>AlMasjid is on Mixlr</a></small>
    </section>
    </>
  );
}
