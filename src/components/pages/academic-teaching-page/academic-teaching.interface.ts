import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface AcademicTeaching {
  title: string;
  description: string;
  img: IGatsbyImageData | null;
}

export interface AcademicPaper {
  title: string;
  description: string;
  img: IGatsbyImageData | null;
  isDownloable: boolean;
  link: string;
}
