import Heading from "../heading/heading";
import ClassComponent from "./classComponent";
import styles from "./classes.module.css";

export default function ClassesSection({ bg, ...props }) {
  return (
    <section
      className={`${
        bg ? styles.classesContaineBg : styles.classesContaineNoBg
      } p-5 flex flex-col`}
      {...props}
    >
      <Heading className="pt-8 pb-4 text-center">Our Courses</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] mb-8">
        Learn and grow with our comprehensive courses.
      </p>
      <div className="flex justify-center flex-wrap mx-auto">
        <ClassComponent
          className="mx-4"
          backgroundImage={'https://almasjid-site.s3.eu-north-1.amazonaws.com/1.png'}
          title="Advanced Islamic Studies"
          href="/classes/alimiyyah"
          advanced={true}
        >
          ʿĀlimiyyah Programme offering advanced Islamic Theology education for
          self-driven individuals.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={'https://almasjid-site.s3.eu-north-1.amazonaws.com/2.png'}
          title="Qur'an and Islamic Studies for kids"
          href="/classes/maktab"
          foundation={true}
        >
          A foundation program for children aged 7-14, guided by
          experienced teachers to nurture faith and learning.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={'https://almasjid-site.s3.eu-north-1.amazonaws.com/3.png'}
          title="Arabic for Kids"
          href="/classes/arabicForKids"
          intermediate={true}
        >
          The basics of Arabic grammar and syntax to understand the Qur’an,
          hadith, as well as key texts in Islamic jurisprudence for teens aged
          12-14.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={'https://almasjid-site.s3.eu-north-1.amazonaws.com/4.png'}
          title="Qur’an Memorisation"
          href="/classes/hifz"
        >
          Learn and memorise the Qur'an from the comfort of home, perfect for
          those without access to local facilities, with one-to-one classes
        </ClassComponent>

        <p className="text-center mt-6 mb-4 text-md font-[family-name:var(--font-montserrat)] max-w-5xl mx-6 md:mx-16">
          Our courses are as open to sisters as they are for brothers. Sisters
          are taught by a qualified female ʿālimah. Girls over the age
          of 10 are taught by a female teacher in a girls only class.
        </p>
      </div>
    </section>
  );
}
