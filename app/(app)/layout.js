import { Raleway, Montserrat, Noto_Nastaliq_Urdu } from "next/font/google";
import "@/app/globals.css";
import Header from "../ui/header/header";
import Footer from "@/app/ui/footer/footer";
import Head from "next/head";
// import ParticlesComponent from "../ui/particles/particles";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { AudioProvider } from "../lib/AudioContext";
import AudioPlayer from "../ui/audioPlayer/AudioPlayer";

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

export const metadata = {
  title: {
    template: "%s | Al Masjid",
    default: "Al Masjid",
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
      <html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-title" content="Almasjid" />
        </Head>

        {/* <SpeedInsights /> */}
        <Analytics />

        <body
          className={`${raleway.variable} ${nastaliq.variable} ${montserrat.variable} antialiased min-h-[100vh] flex flex-col`}
        >
          <GCScript siteUrl={"https://almasjid.goatcounter.com/count"} />
          {/* <ParticlesComponent /> */}

          <Header />

          <AudioProvider>
            {children}
            <AudioPlayer />
          </AudioProvider>
          <Footer />
        </body>
      </html>
  );
}
