import React from 'react';
import { TestimonialCardStyles } from './testimonial-card.styles';
import { TestimonialCardProps } from './testimonial-card.interface';
import { Language } from '../enum/language.enum';

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  comment,
  name,
  comment_language = Language.ENGLISH,
}) => {
  return (
    <TestimonialCardStyles
      className={`testimonial-card ${comment_language === Language.HINDI && 'hindi'}`}
    >
      <p className="desc">{comment}</p>
      <p className="name">- {name}</p>
    </TestimonialCardStyles>
  );
};

export default TestimonialCard;
