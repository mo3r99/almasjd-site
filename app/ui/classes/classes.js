// Import necessary components and styles
import Heading from "../heading/heading";
import ClassComponent from "./classComponent";
import styles from "./classes.module.css";

// Import classes data from the store
import classes from "@/store/classes/classes";

export default function ClassesSection({ bg, ...props }) {
  // Convert classes object into an array for mapping
  let classesArray = [];
  for (const [key, value] of Object.entries(classes)) {
    classesArray.push(value);
  }

  return (
    // Main section container with conditional background styling
    <section
      className={`${
        bg ? styles.classesContaineBg : styles.classesContaineNoBg
      } p-5 flex flex-col`}
      {...props}
    >
      {/* Section header */}
      <Heading className="pt-8 pb-4 text-center">Our Courses</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] mb-8">
        Learn and grow with our comprehensive courses.
      </p>

      {/* Classes flex container */}
      <div className="flex justify-center flex-wrap mx-auto">
        {/* Map through classes array to render individual class components */}
        {classesArray.map((item, index) => {
          if (!item.workshop) {
            return (
              <ClassComponent
                key={index}
                className="mx-4"
                backgroundImage={item.backgroundImage}
                title={item.title}
                href={item.href}
                advanced={item.advanced}
                intermediate={item.intermediate}
                foundation={item.foundation}
              >
                {item.blurb}
              </ClassComponent>
            );
          }
        })}

        {/* Bottom text for sisters' classes */}
        <p className="text-center mt-6 mb-4 text-md font-[family-name:var(--font-montserrat)] max-w-5xl mx-6 md:mx-16">
          Our courses are as open to sisters as they are for brothers. Sisters
          are taught by a qualified female ʿālimah. Girls over the age of 10 are
          taught by a female teacher in a girls only class.
        </p>
      </div>
    </section>
  );
}
