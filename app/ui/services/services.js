import Heading from "../heading/heading";
import ClassComponent from "../classes/classComponent";
import styles from "./services.module.css";

import s1Img from '@/assets/s1.png'
import s2Img from '@/assets/s2.png'

export default function ServicesSection({ bg, ...props }) {
  return (
    <section
      className={`${bg ? styles.container : styles.containerNoBg} p-5 z-10`}
      {...props}
    >
      <Heading className="pt-8 pb-4 text-center">Our services</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] pb-8">
        Services offered by Almasjid
      </p>

      <div className="flex justify-center flex-wrap">
        <ClassComponent
          className="mx-4"
          backgroundImage={s1Img.src}
          href={"/services/careers"}
          title={"Careers Advice"}
          buttonText={'Coming soon'}
        >
          Regular seminars across Scotland - Please register for your free space
          in our next seminar in your nearest city.
        </ClassComponent>

        <ClassComponent
          className="mx-4"
          backgroundImage={s2Img.src}
          href={"/services/reminders"}
          title={"Daily Reminders"}
        >
          Remain connected with your Creator, not only giving you food for
          thought for the day, but enhance your understanding of Islam in key
          areas of life.
        </ClassComponent>
      </div>
    </section>
  );
}
