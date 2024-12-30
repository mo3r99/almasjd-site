import Heading from "../heading/heading";
import ClassComponent from "./classComponent";

export default function Classes() {
  return (
    <section className="p-5 bg-white">
      <Heading className="pt-8 pb-4 text-center">Our Classes</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] pb-8">
        Learn and grow with our comprehensive courses.
      </p>
      <div className="flex justify-center flex-wrap">
        <ClassComponent
        className='mx-4'
          backgroundImage={"/1.png"}
          title="Advanced Islamic Studies"
          href='/classes/alimiyyah'
          advanced={true}
        >
          ʿĀlimiyyah Programme offering advanced Islamic Theology education for
          self-driven individuals.
        </ClassComponent>

        <ClassComponent
        className='mx-4'
          backgroundImage={"/2.png"}
          title="Qur'an and Islamic Studies for kids"
          href='/classes/maktab'
          kids={true}
        >
          A well-structured program for children aged 7-14, guided by experienced teachers to nurture faith and learning.
        </ClassComponent>
      </div>
    </section>
  );
}
