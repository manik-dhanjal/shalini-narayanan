import { CaptionedImage } from '../../shared/image-carousel/image-carousel.interface';

export interface TrainingService {
  title: string;
  description: string;
  images: CaptionedImage[];
}
