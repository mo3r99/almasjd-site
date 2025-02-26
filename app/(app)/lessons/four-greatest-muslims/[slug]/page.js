import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Button from "@/app/ui/button/button";
import Heading from "@/app/ui/heading/heading";

export async function generateMetadata ({params}) {
  const slug = (await params).slug;

  const title =
    slug === "abu-bakr"
      ? "Session 1: Abu Bakr (RA)"
      : slug === "umar"
      ? "Session 2: Umar (RA)"
      : slug === "uthman"
      ? "Session 3: Uthman (RA)"
      : slug === "ali" && "Session 4: Ali (RA)";

  return {
    title: title,
    description: `Stories of the Four Greatest Muslims - ${title.slice(0,8)}`
  }
}

export default async function LessonPage({ params }) {
  const slug = (await params).slug;

  const title =
    slug === "abu-bakr"
      ? "Session 1: Abu Bakr (RA)"
      : slug === "umar"
      ? "Session 2: Umar (RA)"
      : slug === "uthman"
      ? "Session 3: Uthman (RA)"
      : slug === "ali" && "Session 4: Ali (RA)";

  const description = {
    abuBakr:
      "Abu Bakr (RA) was the first Caliph of Islam and the closest companion of the Prophet Muhammad ﷺ. He was known for his humility, piety, and generosity.",
    umar: "Umar (RA) was the second Caliph of Islam and a close companion of the Prophet Muhammad ﷺ. He was known for his justice, strength, and leadership.",
    uthman:
      "Uthman (RA) was the third Caliph of Islam and a close companion of the Prophet Muhammad ﷺ. He was promised Jannah after the affliction of a trial, and his murder left the Islamic empire in shatters.",
    ali: "Ali (RA) was the fourth Caliph of Islam and the cousin and son-in-law of the Prophet Muhammad ﷺ. He was married to the daughter of the Prophet ﷺ, named Fatima (RA).",
  };

  const vidSrc = slug === 'abu-bakr' ? 'https://www.youtube.com/embed/eFmilF9QwO8?si=skMywqQqnTsEGBdg' : slug === 'umar' ? 'https://www.youtube.com/embed/hzvLA4VE-tc?si=AyH8FDDC6e6yycYI' : slug === 'uthman' ? 'https://www.youtube.com/embed/yjOlOrBhs70?si=NnlR5RoreXwBP3xZ' : slug === 'ali' && 'https://www.youtube.com/embed/PLEt4cJRjw8?si=K1LLIeKzq68yLA0l';
  
  const nextSession = slug === 'abu-bakr' ? 'umar' : slug === 'umar' ? 'uthman' : slug === 'uthman' ? 'ali' : slug === 'ali' && undefined;
  const prevSession = slug === 'abu-bakr' ? undefined : slug === 'umar' ? 'abu-bakr' : slug === 'uthman' ? 'umar' : slug === 'ali' && 'uthman';

  return (
    <>
      <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16">
        <Breadcrumbs className="mt-8 mb-4 max-w-[80vw]" />

        <Heading className="font-[800] text-5xl m-auto p-0 max-w-[80vw]">
          {title}
        </Heading>
        <span className="w-16 h-2 bg-weborange mt-4 block"></span>
        <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          {slug === "abu-bakr"
            ? description.abuBakr
            : slug === "umar"
            ? description.umar
            : slug === "uthman"
            ? description.uthman
            : description.ali}
        </p>
      </section>
      <section className="mx-auto my-4">
        <iframe
        className="w-[100vw] h-[60vh] max-w-[1024px]"
          width="560"
          height="315"
          src={vidSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section className="my-8 max-w-[1024px] mx-auto w-[100vw] px-8">
        <Button href={nextSession} colour={`purple`} className={`${!nextSession && 'hidden'} text-sm md:text-md float-right`}>Next Session</Button>
        <Button href={prevSession} colour={`purple`} back={true} className={`${!prevSession && 'hidden'} text-sm md:text-md float-left max-w-[820px]`}>Previous Session</Button>
      </section>
    </>
  );
}
