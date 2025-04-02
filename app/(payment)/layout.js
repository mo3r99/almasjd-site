import Image from "next/image";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

import { GCScript } from "next-goatcounter";
import Footer from "../ui/footer/footer";

export const metadata = {
  title: "Donate | Al Masjid",
  description: "Further our cause at Al Masjid by donating",
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} antialiased min-h-screen`}
      >
        <GCScript siteUrl={"https://almasjid.goatcounter.com/count"} />

        <Image
          src={"https://almasjid-site.s3.eu-north-1.amazonaws.com/sm-logo.png"}
          height={75}
          width={75}
          alt="al masjid logo"
          style={{ margin: "1rem calc(50vw - 40px)" }}
        />
        {children}

        <Footer />
      </body>
    </html>
  );
}
