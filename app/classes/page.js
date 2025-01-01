import ClassesSection from "../ui/classes/classes";
import Community from "../ui/community/community";
import Breadcrumbs from "../ui/breadcrumb/breadcrumbs";
import Lesson from "../ui/lesson/lesson";
import Heading from "../ui/heading/heading";

export const metadata = {
  title: "Classes",
};

export default function Classes() {
  return (
    <>
      <Breadcrumbs className="mx-auto mt-8" />
      <ClassesSection style={{ marginTop: 0, paddingTop: 0 }} />

      <Heading className='text-2xl text-center mb-8'>Self-paced Courses</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] mb-8">
        Go through our short courses, workshops and webinars at your own pace.
      </p>
      <section className="flex-wrap grid md:grid-cols-3 gap-x-8 gap-y-[3.3rem] mb-10 mx-6">
        <Lesson
          href={"/lessons/four-greatest-muslims"}
          title="Stories of the Four Greatest Muslims"
        >
          Learn why Allāh granted them the seal of approval and why the Muslim
          ummah has held them in the highest regard for over 14 centuries.
        </Lesson>

        <Lesson
          href={"/lessons/four-greatest-muslims"}
          title="Tajweed Series"
          image={"/tajweed-series.jpg"}
        >
          Enhance your Qur’anic recitation with our Tajweed Series, featuring
          audio lessons which will guide you through the rules and principles of
          Tajweed.
        </Lesson>
      </section>

      <Community>
        Stay up do date about our latest classes. We will never spam you.
      </Community>
    </>
  );
}
