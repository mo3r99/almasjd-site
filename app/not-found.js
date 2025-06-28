export const metadata = {
  title: "Page not Found",
};

import { Raleway, Montserrat, Noto_Nastaliq_Urdu } from "next/font/google";
import "@/app/globals.css";
import Header from "./ui/header/header";
import Heading from "./ui/heading/heading";
import Link from "next/link";
import Footer from "@/app/ui/footer/footer";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";

import { AudioProvider } from "./lib/AudioContext";
import AudioPlayer from "./ui/audioPlayer/AudioPlayer";

import { GCScript } from "next-goatcounter";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
});

export const viewport = {
  // width: 'device-width',
  // initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Analytics />

      <div
        className={`${raleway.variable} ${nastaliq.variable} ${montserrat.variable} antialiased min-h-[100vh] flex flex-col`}
      >
        <GCScript siteUrl={"https://almasjid.goatcounter.com/count"} />
        {/* <ParticlesComponent /> */}

        <Header />

        <AudioProvider>
          <div className="text-center my-44">
            <Heading className="mb-8 mx-4">
              The page you're looking for can't be found.{" "}
            </Heading>
            <p className="font-[family-name:var(--font-montserrat)] mb-8">
              Whilst you're here, maybe take a look at our{" "}
              <Link href="/classes" className="text-orange-800">
                courses
              </Link>
              .
            </p>
            <Link
              className="text-cyan-800 hover:text-cyan-500 text-lg font-[family-name:var(--font-montserrat)]"
              href="/"
            >
              Go Home
            </Link>
          </div>
          <AudioPlayer />
        </AudioProvider>
        <Footer />
      </div>
    </>
  );
}
