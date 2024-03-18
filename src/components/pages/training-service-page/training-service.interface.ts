import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface TrainingService {
  title: string;
  description: string;
  img: IGatsbyImageData | null;
}
