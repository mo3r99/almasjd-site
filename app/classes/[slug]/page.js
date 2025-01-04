import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Heading from "@/app/ui/heading/heading";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import classes from "@/store/classes/classes";
import Button from "@/app/ui/button/button";

import "./page.css";

function isDark(color) {
  if (!color) {
    return false;
  }
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness < 155;
}

export default async function ClassPage({ params }) {
  const whichClass = await params.slug;

  return (
    <>
      <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16">
        <Breadcrumbs className="mt-8 mb-4" />

        <Heading className="font-[800] text-5xl max-w-[80vw] m-auto p-0">
          {classes[whichClass].title}
        </Heading>
        <span className="w-16 h-2 bg-weborange mt-4 block"></span>
        <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          {classes[whichClass].description}
        </p>
        <Button
          colour={"orange"}
          href={`/classes/${whichClass}/apply`}
          className={"min-w-[244px]"}
        >
          Apply for this course
        </Button>
      </section>

      {classes[whichClass].sections.map((item, index) => {
        const btnColour = isDark(item.background) ? "orange" : "blue";
        const font = isDark(item.background) ? "white" : "black";
        console.log(font, item.background);
        return (
          <section
            key={index}
            className={"pb-12 markdown"}
            style={{ background: item.background }}
          >
            <div className="max-w-5xl m-auto mx-auto" style={{ color: font }}>
              <div className="max-w-[80vw] mx-auto">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table(props) {
                      const { node, ...rest } = props;
                      return <div className="table-wrapper"><table {...rest} /></div>;
                    },
                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                    a(props) {
                      const { node, ...rest } = props;
                      return <a className="link" {...rest} />;
                    },
                  }}
                >
                  {item.markdown}
                </Markdown>
                <Button
                  colour={btnColour}
                  className={"mt-8 float-right"}
                  href={`/classes/${whichClass}/apply`}
                >
                  apply
                </Button>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
