import Breadcrumbs from "../../ui/breadcrumb/breadcrumbs";
import Container from "../../ui/container/container";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
    <section className="mx-10 mb-10 pb-10">
      <Container>
        <Breadcrumbs className='mt-10 mb-4' />
        <h1 className="font-[family-name:var(--font-raleway)] font-medium text-5xl pb-7">
          About Al Masjid
        </h1>
        <p className="font-[family-name:var(--font-montserrat)] max-w-3xl">
          Al Masjid is a nonprofit organisation dedicated to supporting families
          who face challenges in accessing the services of mosques. Our mission
          centres on fostering a healthy and inclusive way of life within Muslim
          communities while addressing spiritual, social, and educational needs.
          <br/>
          <br/>
          Managed by a panel of Imams and supported by a diverse group of
          skilled volunteers from various professions, Al Masjid upholds the
          mainstream Sunni-Islam tradition. As a religious, academic, and
          spiritual institution, we are committed to nurturing faith, peace, and
          tolerance in all aspects of life. Our initiatives are inspired by the
          teachings and legacy of Shaykhul-Hadith Maulana Yusuf Motala, founder
          of Darul Uloom Al Arabiyyah Al Islamiyyah, Bury (May Allah Ta&apos;ala
          illuminate his grave), whose vision saw the spread of Islam throughout
          the UK. Al Masjid offers a range of programs and services aimed at
          empowering and educating individuals and families, including Qur&apos;an
          memorisation, Islamic studies, and more advanced ʿĀlimiyyah classes.
          <br/>
          <br/>
          We actively promote understanding, cooperation, and harmony within
          Muslim communities and with the wider society – taking lessons from
          the Sunnah of our beloved Prophet ﷺ at every step.
        </p>
      </Container>
    </section>
    </>
  );
}
