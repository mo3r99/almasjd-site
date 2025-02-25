import { Raleway, Montserrat } from "next/font/google";
import "@/app/globals.css";
import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import Head from "next/head";
import ParticlesComponent from "../ui/particles/particles";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { ViewTransitions } from "next-view-transitions";

import { AudioProvider } from "../lib/AudioContext";
import AudioPlayer from "../ui/audioPlayer/AudioPlayer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | AlMasjid",
    default: "AlMasjid",
  },
  description: "Serving the Community",
  metadataBase: new URL("https://almasjid.co.uk"),
};

export const viewport = {
  // width: 'device-width',
  // initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
  viewportFit: 'cover',
}

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
          <ParticlesComponent />

          <Header />

          <AudioProvider>
            {children}
            <AudioPlayer />
          </AudioProvider>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
