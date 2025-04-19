import ClassesSection from "../../ui/classes/classes";
import Community from "../../ui/community/community";
import Breadcrumbs from "../../ui/breadcrumb/breadcrumbs";
import Lesson from "../../ui/lesson/lesson";
import Heading from "../../ui/heading/heading";

import classes from "@/store/classes/classes";

export const metadata = {
  title: "Classes",
  description:
    "Learn and grow with our online courses, workshops and webinars, with classes for all ages and levels.",
};

export default function Classes() {
  const newCourses = Object.values(classes).filter(
    (course) => course.workshop && !course.closed
  );

  const manyNewCourses = newCourses.length > 1;

  const completedCourses = Object.values(classes).filter((course) => {
    if (course.workshop && course.closed) {
      return course;
    } else {
      return;
    }
  });

  console.log(newCourses, completedCourses);

  return (
    <>
      <Breadcrumbs className="mx-auto mt-8" />
      <ClassesSection style={{ marginTop: 0, paddingTop: 0 }} />

      <div className="bg-gradient-to-br from-[rgb(252,246,238)] to-[rgb(252,230,205)] pt-4">
        <Heading className="text-2xl text-center mb-8 mt-8 max-w-[80vw] m-auto">
          Workshops & Webinars
        </Heading>
        <p className="text-center font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          One-time courses covering a range of topics.
        </p>

        <span className="w-[80vw] h-[1px] bg-[rgb(217,204,187)] m-auto my-8 block" />

        <div
          className={`${
            !manyNewCourses &&
            newCourses.length > 0 &&
            "grid-cols-1 gap-20 md:gap-2 md:grid-cols-2 grid-rows-1"
          } max-w-screen-2xl mx-auto mb-16 relative`}
        >
          {newCourses.length > 0 && (
            <>
              <section className="m-auto mb-8">
                <Heading className="text-xl mb-8 mt-4 mx-auto text-center">
                  New & Ongoing Workshops
                </Heading>
                <section className="mb-10 max-w-[80vw] mx-auto flex flex-row gap-16 flex-wrap">
                  {newCourses.map((course, index) => (
                    <Lesson
                      key={index}
                      href={course.href}
                      title={course.title}
                      image={course.backgroundImage}
                      newCourse={true}
                      applicationsOpen={true}
                    >
                      {course.blurb}
                    </Lesson>
                  ))}
                </section>
              </section>

              {!manyNewCourses && (
                <>
                  <span className="hidden md:block w-[1px] h-[80%] absolute right-[50%] bg-[rgb(217,204,187)] m-auto my-16" />
                  <span className="w-[80vw] h-[1px] bg-[rgb(217,204,187)] m-auto my-8 block md:hidden absolute top-[48%] right-[50%] translate-x-[50%]" />
                </>
              )}
            </>
          )}

          <section className="m-auto h-full pt-8">
            <Heading className="text-xl mb-8 mt-4 mx-auto text-center">
              Completed & Recorded Courses
            </Heading>
            <section className="mb-10 max-w-[80vw] mx-auto flex flex-row gap-16 flex-wrap">
              {completedCourses.map((course, index) => (
                <Lesson
                  key={index}
                  href={course.href}
                  title={course.title}
                  image={course.backgroundImage}
                >
                  {course.blurb}
                </Lesson>
              ))}
            </section>
          </section>
        </div>
      </div>
      <Community>Stay up do date about our latest classes.</Community>
    </>
  );
}
