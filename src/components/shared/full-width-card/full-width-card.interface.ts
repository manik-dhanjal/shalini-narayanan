import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Category } from '../../pages/creative-writing-page/creative-writing.interface';

export interface FullWidthCardProps {
  imgSrc: IGatsbyImageData;
  title: string;
  desc: string;
  link: string;
  categories: Category[];
  btnText: string;
}
