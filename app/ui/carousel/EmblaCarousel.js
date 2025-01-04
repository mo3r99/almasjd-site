"use client";

import { useCallback } from "react";
import { DotButton, useDotButton } from "./CarouselDots";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrows";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

import useEmblaCarousel from "embla-carousel-react";
import CarouselSlides from "./CarouselSlides";
import { cn } from "@/lib/utils";

const EmblaCarousel = ({ slides, options, children, className, ...props }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    [Autoplay()],
    [WheelGesturesPlugin({
      target: undefined,
      forceWheelAxis: undefined
    }
    )]
  );

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section
      className={cn("embla md:px-8 md:pb-8 p-2 relative", className)}
      {...props}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
