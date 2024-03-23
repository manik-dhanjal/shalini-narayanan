import { IGatsbyImageData } from 'gatsby-plugin-image';
export interface Category {
  name: string;
  id: string;
}
export interface CreativeWritingProps {
  title: string;
  description: string;
  link: string;
  isDownloable: boolean;
  img: IGatsbyImageData | null;
  categories: Category[];
}
