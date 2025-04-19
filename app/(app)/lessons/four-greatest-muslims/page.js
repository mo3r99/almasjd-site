import Heading from "@/app/ui/heading/heading";
import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import YTLesson from "./YTLesson";
import Community from "@/app/ui/community/community";

export const metadata = {
  title: 'Four Greatest Muslims',
  description: 'Stories of the Four Greatest Muslims - The Rightly Guided Caliphs'
}

export default function FourGreatestMuslimsPage() {
  return (
    <>
      <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16">
        <Breadcrumbs className="mt-8 mb-4 max-w-[80vw]" />

        <Heading className="font-[800] text-5xl max-w-[80vw] m-auto p-0">
          Stories of the Four Greatest Muslims
        </Heading>
        <span className="w-16 h-2 bg-weborange mt-4 block"></span>
        <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          Learn why Allah granted them the seal of approval and why the Ummah
          has held them in the highest regard for over 14 centuries.
        </p>
      </section>
      <section className="bg-[rgb(56,143,122)] p-8">
        <div className="flex flex-wrap justify-center gap-4">
          <YTLesson title="Session 1: Abu Bakr (RA)" image={'almasjid-site.s3.eu-north-1.amazonaws.com/abu-bakr.png'} link={'/lessons/four-greatest-muslims/abu-bakr'} />
          <YTLesson title="Session 2: Umar (RA)" image={'almasjid-site.s3.eu-north-1.amazonaws.com/umar.png'} link={'/lessons/four-greatest-muslims/umar'} />
          <YTLesson title="Session 3: Uthman (RA)" image={'almasjid-site.s3.eu-north-1.amazonaws.com/uthman.png'} link={'/lessons/four-greatest-muslims/uthman'} />
          <YTLesson title="Session 4: Ali (RA)" image={'almasjid-site.s3.eu-north-1.amazonaws.com/placeholder.png'} link={'/lessons/four-greatest-muslims/ali'} />
        </div>
      </section>

      <Community >Stay up to date about our latest webinars.</Community>
    </>
  );
}
