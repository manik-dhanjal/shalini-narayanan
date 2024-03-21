import { Language } from '../enum/language.enum';

export interface TestimonialCardProps {
  name: string;
  comment: string;
  comment_language?: Language;
}
