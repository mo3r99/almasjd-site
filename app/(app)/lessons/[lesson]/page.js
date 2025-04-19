import Heading from "@/app/ui/heading/heading";
import ls from "@/store/lessons/lessons";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

import Image from "next/image";

const LESSON = ls.LESSON;

function TitleHeader({ title, children, nop, ...props }) {
  return (
    <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16" {...props}>
      <Breadcrumbs className="mt-8 mb-4" />

      <Heading className="font-[800] text-5xl max-w-[80vw] p-0">
        {title}
      </Heading>

      <span className="w-16 h-2 bg-weborange my-4 block"></span>

      {!nop ? (
        <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          {children}
        </p>
      ) : (
        children
      )}
    </section>
  );
}

function slugToIndex (slug) {
  const links = LESSON.map((ls) => ls.slug);

  let validLink = [false, 0];
  let index = 0;
  links.forEach((link) => {
    if (link === slug) {
      validLink = [true, index];
    }
    index++;
  })

  if (!validLink) {
    return notFound();
  }

  return validLink[1];
}

export async function generateMetadata({ params }) {
  let lesson = (await params).lesson;

  const index = slugToIndex(lesson);

  return {
    title: LESSON[index].title,
    description: LESSON[index].description
  }
}

export default async function Lesson({ params }) {
  let slug = (await params).lesson;

  if (slug === "links") {
    return notFound();
  }

  // const links = LESSON.map((lesson) => {
  //   return lesson.slug;
  // });

  // let validLink = [false, 0];
  // let index = 0;
  // links.forEach((link) => {
  //   if (link === lesson) {
  //     validLink = [true, index];
  //   }
  //   index++;
  // })

  // if (!validLink) {
  //   return notFound();
  // }

  const index = slugToIndex(slug);

  if (!LESSON[index].content?.soundcloud) {
    return (
      <>
        <TitleHeader title={LESSON[index].content.title} nop={true}>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2(props) {
                const { node, ...rest } = props;
                return <Heading className="text-xl mt-4" {...rest} />;
              },
              table(props) {
                const { node, ...rest } = props;
                return (
                  <div className="table-wrapper">
                    <table {...rest} />
                  </div>
                );
              },
              // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              a(props) {
                const { node, ...rest } = props;
                return (
                  <Link
                    className="text-cyan-700 hover:text-cyan-500"
                    {...rest}
                  />
                );
              },
              img(props) {
                const { node, src, ...rest } = props;
                return (
                  <Image
                    className="m-4 md:m-6"
                    src={src}
                    {...rest}
                    width={300}
                    height={300}
                    alt={''}
                  />
                );
              },
            }}
          >
            {LESSON[index].content.markdown}
          </Markdown>
        </TitleHeader>
      </>
    );
  }

  return (
    <>
      <TitleHeader title={LESSON[index].title}>
        {LESSON[index].description}
      </TitleHeader>
      <section>
        <iframe
          width="100%"
          height="450"
          style={{
            maxWidth: "1024px",
            width: "100%",
            margin: "0 auto 4rem auto",
          }}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={LESSON[index].content.link}
        />
      </section>
    </>
  );
}
