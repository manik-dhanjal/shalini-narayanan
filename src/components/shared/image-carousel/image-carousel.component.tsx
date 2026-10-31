import React from 'react';
import Slider, { Settings } from 'react-slick';
import ImageCarouselStyles from './image-carousel.styles';
import { CaptionedImage, ImageCarouselProps } from './image-carousel.interface';
import ContentImage from '../content-image/content-image.component';
import { useRewindingSlider } from '../../../hooks/use-rewinding-slider';

// a single image, or a captioned carousel when there are several
const AUTOPLAY_SPEED = 4000;

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const { sliderRef, afterChange } = useRewindingSlider(images.length, AUTOPLAY_SPEED);
  const renderImage = (image: CaptionedImage) => (
    <figure className="carousel-figure" key={image.src}>
      <ContentImage src={image.src} alt={image.caption || title} />
      {image.caption && <figcaption className="carousel-caption">{image.caption}</figcaption>}
    </figure>
  );
  if (images.length === 1)
    return <ImageCarouselStyles>{renderImage(images[0])}</ImageCarouselStyles>;
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_SPEED,
    afterChange,
    adaptiveHeight: true,
    appendDots: (dots) => <ul className="slick-pagination"> {dots} </ul>,
    customPaging: () => <div className="slick-pag-item"></div>,
    arrows: false,
  };
  return (
    <ImageCarouselStyles>
      <Slider ref={sliderRef} {...settings}>
        {images.map(renderImage)}
      </Slider>
    </ImageCarouselStyles>
  );
};
export default ImageCarousel;
