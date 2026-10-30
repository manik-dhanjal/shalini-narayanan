import { AboutSectionTypes } from './about.enum';

export interface About {
  title: string;
  description: string;
  img: string | null;
  sectionType: AboutSectionTypes;
  resumeLink: string | null;
}
