import Heading from "../heading/heading";
import ClassComponent from "./classComponent";

import styles from "./classes.module.css";

export default function ClassesSection ({bg}) {
  return (
    <section className={`${bg ? styles.classesContaineBg : styles.classesContaineNoBg} p-5`}>
      <Heading className="pt-8 pb-4 text-center">Our Classes</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] pb-8">
        Learn and grow with our comprehensive courses.
      </p>
      <div className="flex justify-center flex-wrap">
        <ClassComponent
          className="mx-4"
          backgroundImage={"/1.png"}
          title="Advanced Islamic Studies"
          href="/classes/alimiyyah"
          advanced={true}
        >
          ʿĀlimiyyah Programme offering advanced Islamic Theology education for
          self-driven individuals.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={"/2.png"}
          title="Qur'an and Islamic Studies for kids"
          href="/classes/maktab"
          kids={true}
        >
          A well-structured program for children aged 7-14, guided by
          experienced teachers to nurture faith and learning.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={"/3.png"}
          title="Arabic for Kids"
          href="/classes/arabic-for-kids"
          kids={true}
        >
          The basics of Arabic grammar and syntax to understand the Qur’an,
          hadith, as well as key texts in Islamic jurisprudence for teens aged
          12-14.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={"/4.png"}
          title="Qur’an Memorisation"
          href="/classes/hifz"
          kids={true}
          advanced={true}
        >
          Learn and memorise the Qur'an from the comfort of home, perfect for
          those without access to local facilities, with one-to-one classes
        </ClassComponent>

        <p className="text-center mt-6 mb-4 text-md font-[family-name:var(--font-montserrat)] mx-6 md:mx-16">
          Our services are as open to sisters as these are for brothers. We
          make every effort to have a qualified female member serve our sisters.
          Girls over the age of 10 are only taught by a female teacher in a
          girls only class.
        </p>
      </div>
    </section>
  );
}
