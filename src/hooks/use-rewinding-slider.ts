import { useRef } from 'react';
import Slider from 'react-slick';

// Loops a one-slide-at-a-time slider by rewinding to the first slide instead of
// slick's infinite mode, which clones slides and duplicates their text in the page.
export const useRewindingSlider = (slideCount: number, autoplaySpeed: number) => {
  const sliderRef = useRef<Slider>(null);
  const currentSlide = useRef(0);
  const afterChange = (current: number) => {
    currentSlide.current = current;
    if (current !== slideCount - 1) return;
    setTimeout(() => {
      // only rewind if nobody has moved the slider in the meantime
      if (currentSlide.current === slideCount - 1) sliderRef.current?.slickGoTo(0);
    }, autoplaySpeed);
  };
  return { sliderRef, afterChange };
};
