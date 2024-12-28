import Image from "next/image";
import Button from "../button/button";
import Container from "../container/container";

export default function CarouselCard({
  title,
  children,
  caption,
  link,
  image,
  type,
  ...props
}) {
  let direction;
  let items;
  let text;

  if (type == "r") {
    direction = "smd:flex-row-reverse";
    items = "smd:items-end"
    text = "smd:text-right"
  } else {
    direction = "smd:flex-row";
    items = "smd:items-start"
    text = "smd:text-left"
  }

  

  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      className="min-h-[770px] lg:min-h-[70vh] lg:max-h-[500px] md:h-[80vh] min-w-[100%] max-w-5xl mx-auto"
    >
      
      <div
        className={`flex flex-col ${direction} smd:items-center smd:justify-between smd:flex-nowrap`}
      >
        <Container className={`p-12 flex items-center ${items} flex-col`}>
          <h1
            className={`font-[family-name:var(--font-raleway)] text-center ${text} font-semibold text-5xl md:text-6xl pb-7 max-w-2xl`}
          >
            {title}
          </h1>
          <p
            className={`text-center font-[family-name:var(--font-montserrat)] ${text} max-w-md`}
          >
            {children}
            <br />
            <span className="uppercase mt-2 font-semibold text-weborange">{caption && caption}</span>
          </p>
          <Button href={link} colour="blue" style={{ zIndex: 1 }}>
            Learn More
          </Button>
        </Container>

        {image && (
          <div className={`flex justify-center items-center`}>
            <Image
              src={image}
              width={320}
              height={320}
              className={`self-center mix-blend-multiply w-auto h-auto pointer-events-none mx-6 smd:relative bottom-[30vh]}`}
              alt={title}
            />
          </div>
        )}
      </div>
    </section>
  );
}
