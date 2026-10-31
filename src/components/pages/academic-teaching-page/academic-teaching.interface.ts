import { CaptionedImage } from '../../shared/image-carousel/image-carousel.interface';

export interface AcademicTeaching {
  title: string;
  description: string;
  images: CaptionedImage[];
}

export interface AcademicPaper {
  title: string;
  description: string;
  img: string | null;
  isDownloable: boolean;
  link: string;
}
