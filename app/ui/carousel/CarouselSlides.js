'use client'

export default function CarouselSlides({ children, ...props }) {
  return (
    <div className="embla__slide" {...props}>
      <div className="embla__slide__content">{children}</div>
    </div>
  );
}
