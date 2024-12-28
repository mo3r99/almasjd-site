import Heading from '@/app/ui/heading/heading'

export default function LiveStream() {
  return (
    <section className="flex flex-col justify-center items-center p-5 bg-[#07100f] text-white">
      <Heading className="pt-8 pb-2">Live Stream</Heading>
      <p className="font-[family-name:var(--font-montserrat)] pb-8">
        Join us when we go live!
      </p>
      <iframe
        src="https://almasjid.mixlr.com/embed"
        frameBorder="0"
        scrolling="no"
        height="200px"
        width="100%"
      ></iframe>
      <small>
        <a
          href="https://mixlr.com/"
          style={{
            color: "#1a1a1a",
            display: "block",
            fontFamily: "Helvetica, sans-serif",
            fontSize: "11px",
            textAlign: "left",
            padding: "4px 0",
          }}
        >
          AlMasjid is on Mixlr
        </a>
      </small>
    </section>
  );
}
