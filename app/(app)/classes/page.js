import ClassesSection from "../../ui/classes/classes";
import Community from "../../ui/community/community";
import Breadcrumbs from "../../ui/breadcrumb/breadcrumbs";
import Lesson from "../../ui/lesson/lesson";
import Heading from "../../ui/heading/heading";

export const metadata = {
  title: "Classes",
};

export default function Classes() {
  return (
    <>
      <Breadcrumbs className="mx-auto mt-8" />
      <ClassesSection style={{ marginTop: 0, paddingTop: 0 }} />

      {/* <span className="w-[80vw] h-[1px] bg-zinc-300 m-auto my-8" /> */}

      <div className="bg-gradient-to-br from-[rgb(252,246,238)] to-[rgb(252,230,205)] pt-4">
        <Heading className="text-2xl text-center mb-8 mt-8 max-w-[80vw] m-auto">
          Workshops & Webinars
        </Heading>
        <p className="text-center font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          One-time courses covering a range of topics.
        </p>

        <span className="w-[80vw] h-[1px] bg-[rgb(217,204,187)] m-auto my-8 block" />

        <div className="grid grid-rows-2 grid-cols-1 gap-20 md:gap-2 md:grid-cols-2 md:grid-rows-1 max-w-screen-2xl mx-auto mb-16 relative">
          <section className="m-auto h-full">
            <Heading className="text-xl mb-8 mt-4 mx-auto text-center">
              New & Ongoing Workshops
            </Heading>
            <section className="mb-10 items-center justify-center max-w-[80vw] mx-auto">
              <Lesson
                href={"/classes/tafseer"}
                title="Tafseer of Last 10 Surahs"
                image={"/tafseer.png"}
                newCourse={true}
                applicationsOpen={true}
              >
                Learning and understand our creator’s message for us this
                Ramadhan through this online course, specifically designed for
                young adults, with visuals, illustrations, practical advice and
                contemporary examples.
              </Lesson>
            </section>
          </section>

          <span className="hidden md:block w-[1px] h-[80%] absolute right-[50%] bg-[rgb(217,204,187)] m-auto my-16" />

          <span className="w-[80vw] h-[1px] bg-[rgb(217,204,187)] m-auto my-8 block md:hidden absolute top-[48%] right-[50%] translate-x-[50%]" />

          <section className="m-auto h-full">
            <Heading className="text-xl mb-8 mt-4 mx-auto text-center">
              Completed & Recorded Courses
            </Heading>
            <section className="mb-10 max-w-[80vw] mx-auto">
              <Lesson
                href={"/lessons/four-greatest-muslims"}
                title="Stories of the Four Greatest Muslims"
              >
                Learn why Allāh granted them the seal of approval and why the
                Muslim ummah has held them in the highest regard for over 14
                centuries.
              </Lesson>
            </section>
          </section>
        </div>
      </div>
      <Community>
        Stay up do date about our latest classes. We will never spam you.
      </Community>
    </>
  );
}
