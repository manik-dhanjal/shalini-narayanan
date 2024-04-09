import { IGatsbyImageData } from 'gatsby-plugin-image';
import { AboutSectionTypes } from './about.enum';

export interface About {
  title: string;
  description: string;
  img: IGatsbyImageData | null;
  sectionType: AboutSectionTypes;
  resumeLink: string | null;
}
