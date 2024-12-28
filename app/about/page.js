import Image from "next/image";
import Container from "../ui/container/container";

export const metadata = {
  title: "About | Almasjid",
};

export default function About() {
  return (
    <section className="mx-10 my-10 py-10">
      <Container>
        <h1 className="font-[family-name:var(--font-raleway)] font-medium text-5xl pb-7">
          About Almasjid
        </h1>
        <p className="font-[family-name:var(--font-montserrat)] max-w-3xl">
          AlMasjid is a nonprofit organisation dedicated to supporting families
          who face challenges in accessing the services of mosques. Our mission
          centres on fostering a healthy and inclusive way of life within Muslim
          communities while addressing spiritual, social, and educational needs.
          <br/>
          <br/>
          Managed by a panel of Imams and supported by a diverse group of
          skilled volunteers from various professions, AlMasjid upholds the
          mainstream Sunni-Islam tradition. As a religious, academic, and
          spiritual institution, we are committed to nurturing faith, peace, and
          tolerance in all aspects of life. Our initiatives are inspired by the
          teachings and legacy of Shaykhul-Hadith Maulana Yusuf Motala, founder
          of Darul Uloom Al Arabiyyah Al Islamiyyah, Bury (May Allah Ta’ala
          illuminate his grave), whose vision saw the spread of Islam throughout
          the UK. AlMasjid offers a range of programs and services aimed at
          empowering and educating individuals and families, including Qur'an
          memorisation, Islamic studies, and more advanced ʿĀlimiyyah classes.
          <br/>
          <br/>
          We actively promote understanding, cooperation, and harmony within
          Muslim communities and with the wider society – taking lessons from
          the Sunnah of our beloved Prophet ﷺ at every step.
        </p>
      </Container>
    </section>
  );
}
