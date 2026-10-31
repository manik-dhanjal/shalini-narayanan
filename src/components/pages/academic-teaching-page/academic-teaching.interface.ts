import { CaptionedImage } from '../../shared/image-carousel/image-carousel.interface';

export interface AcademicTeaching {
  title: string;
  description: string;
  images: CaptionedImage[];
  // link to the original post, shown as a button under the description
  link: string | null;
}

export interface AcademicPaper {
  title: string;
  description: string;
  img: string | null;
  isDownloable: boolean;
  link: string;
}
