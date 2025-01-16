import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Heading from "@/app/ui/heading/heading";
import { Link } from "next-view-transitions";
import Image from "next/image";

import img from "@/assets/3.png";
import booksImg from "@/assets/books.jpg";

import styles from './pdf.module.css'

function Book({ title, href, image, ...props }) {
  return (
    <div className={`${styles.book} w-[250px] h-[312px] smd:w-[200px] smd:h-[250px] bg-blue relative mb-12 book transition-all duration-200`}>
      <Link href={href}>
        <Image
          src={image}
          className="hidden md:block z-[1]"
          width={200}
          height={300}
          alt={title}
        />
        <Image
          src={image}
          className="block md:hidden z-[1]"
          width={250}
          height={375}
          alt={title}
        />

        <div className="h-full w-full bg-[rgb(65,132,116)] opacity-55 absolute top-0 right-0 z-[2]" />
        <h3 className="z-[3] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-center text-white text-xl font-[family-name:var(--font-montserrat)] font-bold">
          {title}
        </h3>
      </Link>
    </div>
  );
}

export default function PDFLib() {
  return (
    <>
      <div className="absolute left-0 top-0 w-screen min-h-[525px] h-[calc(40vh+244px)] z-[-1] bg-[rgb(240,162,41,0.5)]">
        <div className="absolute left-0 top-0 w-screen min-h-[525px] h-[calc(40vh+244px)] bg-gradient-to-t from-[rgb(255,255,255)] via-[rgba(242,231,212,0.82)] to-[rgba(255,245,231,0.75)] backdrop-blur-sm z-0" />
        <Image
          src={booksImg}
          className="brightness-90 z-[-1]"
          fill
          sizes="1000px"
          alt="books background image"
        />
      </div>
      <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16">
        <Breadcrumbs className="mt-8 mb-4" />

        <Heading className="font-[800] text-5xl max-w-[80vw] p-0">
          PDF Library
        </Heading>

        <span className="w-16 h-2 bg-weborange my-4 block"></span>

        <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          View our library of PDF books, available to read online or download,
          as well as in paperback form. Contact{" "}
          <a
            className="text-cyan-700 hover:text-cyan-600"
            href="mailto:books@almasjid.co.uk"
          >
            books@almasjid.co.uk
          </a>{" "}
          for more information.
        </p>
      </section>

      <main className="max-w-5xl mx-auto px-8">
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          <Book
            href={"/pdf/salat-o-salam-2"}
            title="Salawāt on the Prophet ﷺ"
            image={img}
          />
          <Book href={"/pdf/superstition"} title="Superstition" image={img} />
          <Book
            href={"/pdf/taharah"}
            title="Taharah - 101 Ahādīth"
            image={img}
          />
          <Book
            href={"/pdf/The-principles-on-wills-and-estate-distribution"}
            title="The Principles on Wills and Estate Distribution"
            image={img}
          />
          <Book
            href={"/pdf/thefinaljourney"}
            title="The Final Journey"
            image={img}
          />
          <Book
            href={"/pdf/1"}
            title="Between the God of the Prophets & God of the Philosophers"
            image={img}
          />
        </div>
      </main>
    </>
  );
}
