import { Category } from '../../pages/creative-writing-page/creative-writing.interface';

export interface FullWidthCardProps {
  imgSrc: string | null;
  title: string;
  desc: string;
  link: string;
  categories: Category[];
  btnText: string;
}
