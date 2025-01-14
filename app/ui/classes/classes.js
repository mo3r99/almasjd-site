import Heading from "../heading/heading";
import ClassComponent from "./classComponent";
import Breadcrumbs from "../breadcrumb/breadcrumbs";
import styles from "./classes.module.css";

import img1 from '@/assets/1.png'
import img2 from '@/assets/2.png'
import img3 from '@/assets/3.png'
import img4 from '@/assets/4.png'

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
          backgroundImage={img1.src}
          title="Advanced Islamic Studies"
          href="/classes/alimiyyah"
          advanced={true}
        >
          ʿĀlimiyyah Programme offering advanced Islamic Theology education for
          self-driven individuals.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={img2.src}
          title="Qur'an and Islamic Studies for kids"
          href="/classes/maktab"
          foundation={true}
        >
          A foundation program for children aged 7-14, guided by
          experienced teachers to nurture faith and learning.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={img3.src}
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
          backgroundImage={img4.src}
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
