import Heading from "@/app/ui/heading/heading";
import LESSONS from "@/store/lessons/lessons";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

function TitleHeader({ title, children, nop, ...props }) {
  return (
    <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16" {...props}>
      <Breadcrumbs className="mt-8 mb-4" />

      <Heading className="font-[800] text-5xl max-w-[80vw] p-0">
        {title}
      </Heading>

      <span className="w-16 h-2 bg-weborange my-4 block"></span>

      {!nop ? <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
        {children}
      </p> : children}
    </section>
  );
}

export default async function Lesson({ params }) {
  let lesson = await params.lesson;

  if (lesson === "links") {
    return notFound();
  }

  for (let [link, title] of LESSONS.links) {
    console.log(link, title, lesson);
    if (link === lesson) {
      lesson = title;
      break;
    }
  }

  if (!LESSONS[lesson]) {
    return notFound();
  }

  if (!LESSONS[lesson].soundcloud) {
    return (
      <>
        <TitleHeader title={LESSONS[lesson].title} nop={true}>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
                h2(props) {
                    const { node, ...rest } = props;
                    return (
                      <Heading className='text-xl mt-4' {...rest} />
                    );
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
                return <Link className="text-cyan-700 hover:text-cyan-500" {...rest} />;
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
                  />
                );
              },
            }}
          >
            {LESSONS[lesson].markdown}
          </Markdown>
        </TitleHeader>
      </>
    );
  }

  return (
    <>
      <TitleHeader title={LESSONS[lesson].title}>
        {LESSONS[lesson].description}
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
          src={LESSONS[lesson].link}
        />
      </section>
    </>
  );
}
