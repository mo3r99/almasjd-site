import { Raleway, Montserrat } from "next/font/google";
import "@/app/globals.css";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import Head from "next/head";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { ViewTransitions } from "next-view-transitions";
import AudioPlayer from "@/app/ui/audioPlayer/AudioPlayer";
import { AudioProvider } from "@/app/lib/AudioContext";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Audio Lectures | Al Masjid",
  description: "Audio Lectures at Al Masjid",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-title" content="Almasjid" />
          <Script
            data-goatcounter="https://almasjid.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          />
        </Head>

        <SpeedInsights />
        <Analytics />

        <body
          className={`${raleway.variable} ${montserrat.variable} antialiased min-h-[100vh] flex flex-col`}
        >
          <span className="bg-neutral-100 fixed top-0 left-0 w-screen h-screen z-[-1]" />
          <Header />
          <AudioProvider>
            {children}
            <AudioPlayer />
          </AudioProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
