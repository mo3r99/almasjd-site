import Heading from "../heading/heading"
import ClassComponent from "../classes/classComponent"
import styles from './services.module.css'

export default function ServicesSection ({bg}) {
    return (
        <section className={`${bg ? styles.container: styles.containerNoBg} p-5`}>
        <Heading className="pt-8 pb-4 text-center">Our services</Heading>
        <p className="text-center font-[family-name:var(--font-montserrat)] pb-8">
          Services offered by Almasjid
        </p>

        <div className="flex justify-center flex-wrap">
          <ClassComponent
          className='mx-4'
            backgroundImage={"/s1.png"}
            href={"/services/careers"}
            title={"Careers Advice"}
          >
            Regular seminars across Scotland - Please register for your free
            space in our next seminar in your nearest city.
          </ClassComponent>

          <ClassComponent
          className='mx-4'
            backgroundImage={"/s2.png"}
            href={"/services/remidners"}
            title={"Daily Reminders"}
          >
            Remain connected with your Creator, not only giving you food for
            thought for the day, but enhance your understanding of Islam in key
            areas of life.
          </ClassComponent>
        </div>
      </section>
    )
}