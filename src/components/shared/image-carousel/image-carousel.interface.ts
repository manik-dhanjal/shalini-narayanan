export interface CaptionedImage {
  src: string;
  caption: string | null;
}

export interface ImageCarouselProps {
  images: CaptionedImage[];
  title: string;
}
