import React from 'react';
import FullWidthCardStyles from './full-width-card.styles';
import { FullWidthCardProps } from './full-width-card.interface';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import Button from '../button/button.component';
import { Link, navigate } from 'gatsby';

const FullWidthCard: React.FC<FullWidthCardProps> = ({
  imgSrc,
  title,
  desc,
  link,
  categories,
  btnText,
}) => {
  return (
    <FullWidthCardStyles className="full-width-card">
      {imgSrc ? (
        <GatsbyImage image={imgSrc} alt={title} className="card-img" />
      ) : (
        <StaticImage
          src="../../../images/placeholder-img.png"
          alt={title}
          width={700}
          placeholder="blurred"
          className="card-img"
          objectFit="contain"
        />
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-categories">
          {categories.map((category) => (
            <div className="card-category">{category.name}</div>
          ))}
        </div>
        <p className="card-desc" dangerouslySetInnerHTML={{ __html: desc }} />
        <Button isUnderlined href={link}>
          {btnText}
        </Button>
      </div>
    </FullWidthCardStyles>
  );
};

export default FullWidthCard;
