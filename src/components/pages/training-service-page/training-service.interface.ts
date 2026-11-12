import { CaptionedImage } from '../../shared/image-carousel/image-carousel.interface';

export interface TrainingService {
  title: string;
  description: string;
  images: CaptionedImage[];
  // link to the original post, shown as a button under the description
  link: string | null;
}
