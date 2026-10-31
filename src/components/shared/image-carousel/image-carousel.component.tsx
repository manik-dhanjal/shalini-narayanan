import React from 'react';
import Slider, { Settings } from 'react-slick';
import ImageCarouselStyles from './image-carousel.styles';
import { CaptionedImage, ImageCarouselProps } from './image-carousel.interface';

// a single image, or a captioned carousel when there are several
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const renderImage = (image: CaptionedImage) => (
    <figure className="carousel-figure" key={image.src}>
      <img src={image.src} alt={image.caption || title} loading="lazy" />
      {image.caption && <figcaption className="carousel-caption">{image.caption}</figcaption>}
    </figure>
  );
  if (images.length === 1)
    return <ImageCarouselStyles>{renderImage(images[0])}</ImageCarouselStyles>;
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    appendDots: (dots) => <ul className="slick-pagination"> {dots} </ul>,
    customPaging: () => <div className="slick-pag-item"></div>,
    arrows: false,
  };
  return (
    <ImageCarouselStyles>
      <Slider {...settings}>{images.map(renderImage)}</Slider>
    </ImageCarouselStyles>
  );
};
export default ImageCarousel;
