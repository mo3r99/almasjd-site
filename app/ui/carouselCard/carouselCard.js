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
  clip,
  background,
  home,
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
      className="md:mt-[5%] mx-auto"
    >
      
      <div
        className={`flex flex-col ${direction} justify-center smd:items-center smd:justify-between smd:flex-nowrap px-4 pb-4 pt-4 md:pt-12`}
        style={{backgroundColor: background ? background : ''}}
      >
        <Container className={`px-12 pb-12 pt-2 md:pt-12 flex items-center ${items} flex-col`}>
          <h1
            className={`font-[family-name:var(--font-raleway)] text-center ${text} font-semibold ${title.length > 23 ? 'text-5xl md:text-5xl' :'text-5xl md:text-6xl' }   pb-7 max-w-2xl`}
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
          <Button href={link} colour={home ? "blue":'purple'} className='mt-4' style={{ zIndex: 1 }}>
            Learn More
          </Button>
        </Container>

        {image && (
          <div className={`flex justify-center items-center`}>
            <Image
              src={`//wsrv.nl/?url=${image}&w=320&h=320`}
              width={320}
              height={320}
              className={`hidden md:block self-center ${home && 'mix-blend-multiply'} w-auto h-auto pointer-events-none mx-6 smd:relative bottom-[30vh]}`}
              alt={title}
              priority={true}
              style={{clipPath: clip && 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)', width: 309.4, height: 309.4}}
              unoptimized
            />
            <Image
              src={`//wsrv.nl/?url=${image}&w=300&h=300`}
              width={200}
              height={200}
              className={`block w-auto h-auto md:hidden self-center ${home && 'mix-blend-multiply'} w-auto h-auto pointer-events-none mx-6 smd:relative bottom-[30vh]}`}
              alt={title}
              priority={true}
              style={{clipPath: clip && 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)', width: 'auto', height: 320, backgroundSize: 'contain', aspectRatio: '1 / 1'}}
              unoptimized
            />
          </div>
        )}
      </div>
    </section>
  );
}
