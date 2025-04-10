import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Heading from "@/app/ui/heading/heading";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import classes from "@/store/classes/classes";
import Button from "@/app/ui/button/button";

import "./page.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Community from "@/app/ui/community/community";

export async function generateMetadata({ params }) {
  const whichClass = (await params).slug;

  return {
    title: classes[whichClass].title,
    description: `${classes[whichClass].blurb}`,
  };
}

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
  const whichClass = (await params).slug;

  if (!classes[whichClass]) {
    notFound();
  }

  const placeholder =
    "almasjid-site.s3.eu-north-1.amazonaws.com/placeholder.png";

  return (
    <>
      <div className="relative">
        <div className="absolute top-4 left-0 w-screen h-[1000px] opacity-50 z-[-1] mix-blend-multiply brightness-105 blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[rgba(255, 255, 255, 0.5)] to-transparent z-10"></div>
          <Image
            src={
              classes[whichClass].bannerImage
                ? `https://wsrv.nl/?url=${classes[whichClass].bannerImage}&w=960&h=540`
                : classes[whichClass].backgroundImage
                ? `https://wsrv.nl/?url=${classes[whichClass].backgroundImage}&w=960&h=540`
                : `https://wsrv.nl/?url=${placeholder}&w=960&h=540`
            }
            alt={classes[whichClass].title}
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
          <Image
            src={
              classes[whichClass].bannerImage
                ? `https://wsrv.nl/?url=${classes[whichClass].bannerImage}&w=640&h=360`
                : classes[whichClass].backgroundImage
                ? `https://wsrv.nl/?url=${classes[whichClass].backgroundImage}&w=640&h=360`
                : `https://wsrv.nl/?url=${placeholder}&w=640&h=360`
            }
            alt={classes[whichClass].title}
            fill
            className="object-cover object-center block md:hidden"
            priority
          />
        </div>
      </div>

      <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16">
        <Breadcrumbs className="mt-8 mb-4" />

        <Heading className="font-[800] text-5xl max-w-[80vw] m-auto p-0">
          {classes[whichClass].title}
        </Heading>

        <span className="w-16 h-2 bg-weborange my-4 block"></span>
        {!classes[whichClass].closed ? (
          <span className="font-bold uppercase text-tradewind text-sm font-[family-name:var(--font-montserrat)] h-7 pt-8">
            Admissions Open for {new Date().getFullYear()}
          </span>
        ) : (
          <span className="font-bold uppercase text-tradewind text-sm font-[family-name:var(--font-montserrat)] h-7 pt-8">
            This course is now complete
          </span>
        )}
        <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          {classes[whichClass].description}
        </p>
        {!classes[whichClass].closed && (
          <Button
            colour={"orange"}
            href={`/classes/${whichClass}/apply`}
            className={"min-w-[244px]"}
          >
            Apply for this course
          </Button>
        )}
        {classes[whichClass].closed && (
          <Button
            colour={"orange"}
            href={`/classes/${whichClass}#community`}
            className={"min-w-[264px]"}
          >
            Register your interest
          </Button>
        )}
      </section>

      {classes[whichClass].sections.map((item, index) => {
        const btnColour = isDark(item.background) ? "orange" : "blue";
        const font = isDark(item.background) ? "white" : "black";
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
                      return (
                        <div className="table-wrapper">
                          <table {...rest} />
                        </div>
                      );
                    },
                    // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                    a(props) {
                      const { node, ...rest } = props;
                      return <Link className="link" {...rest} />;
                    },
                    img(props) {
                      const { node, src, ...rest } = props;
                      return (
                        <Image
                          className="m-4 md:m-6"
                          src={`//wsrv.nl/?url=almasjid-site.s3.eu-north-1.amazonaws.com/${src}&w=300&h=300`}
                          unoptimized
                          {...rest}
                          width={300}
                          height={300}
                        />
                      );
                    },
                  }}
                >
                  {item.markdown}
                </Markdown>
                {!classes[whichClass].closed && (
                  <Button
                    colour={btnColour}
                    className={"mt-8 float-right"}
                    href={`/classes/${whichClass}/apply`}
                  >
                    apply
                  </Button>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {classes[whichClass].closed && (
        <div id="community">
          <Community />
        </div>
      )}
    </>
  );
}
