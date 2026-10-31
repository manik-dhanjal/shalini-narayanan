// Site content lives in the JSON files next to this module. Images referenced by `image`
// are served from static/images/content and downloadable files from static/files.
import aboutJson from './about.json';
import academicPapersJson from './academic-papers.json';
import academicTeachingJson from './academic-teaching.json';
import achievementsJson from './achievements.json';
import categoriesJson from './categories.json';
import creativeWritingJson from './creative-writing.json';
import digitalShowcasesJson from './digital-showcases.json';
import mediaSpotlightsJson from './media-spotlights.json';
import trainingServicesJson from './training-services.json';
import { AboutSectionTypes } from '../components/pages/about-page/about.enum';
import { About } from '../components/pages/about-page/about.interface';
import {
  AcademicPaper,
  AcademicTeaching,
} from '../components/pages/academic-teaching-page/academic-teaching.interface';
import { Achievement } from '../components/pages/achievements-page/achievment-page.interface';
import { AchievementType } from '../components/shared/achievement-card/achievement.enum';
import {
  Category,
  CreativeWritingProps,
} from '../components/pages/creative-writing-page/creative-writing.interface';
import { Card, CardType } from '../components/shared/card-slider/card-slider.interface';
import { TrainingService } from '../components/pages/training-service-page/training-service.interface';

export const getAllAbout = (): About[] =>
  aboutJson.map((about) => ({
    title: about.title,
    description: about.description,
    img: about.image,
    sectionType: about.sectionType as AboutSectionTypes,
    resumeLink: about.resumeLink,
  }));

export const getDataForAboutPage = (): About[] =>
  getAllAbout().filter((about) => about.sectionType !== AboutSectionTypes.HOME_SUMMARY);

export const getDataForHomePageAboutSummary = (): About | null =>
  getAllAbout().find((about) => about.sectionType === AboutSectionTypes.HOME_SUMMARY) || null;

export const getAllAcademicPapers = (): AcademicPaper[] =>
  academicPapersJson.map((academicPaper) => ({
    title: academicPaper.title,
    description: academicPaper.description,
    img: academicPaper.image,
    isDownloable: academicPaper.isDownloable,
    link: academicPaper.link,
  }));

export const getAllAcademicTeaching = (): AcademicTeaching[] =>
  academicTeachingJson.map((academicTeaching) => ({
    title: academicTeaching.title,
    description: academicTeaching.description,
    images: academicTeaching.images,
  }));

export const getAllAchievements = (): Achievement[] =>
  [...achievementsJson]
    .sort((a, b) => b.priority - a.priority)
    .map((achievement) => ({
      title: achievement.title,
      description: achievement.description || null,
      img: achievement.image,
      type: achievement.type as AchievementType,
    }));

export const getAllCategories = (): Category[] =>
  categoriesJson.map((category) => ({
    id: category.slug,
    name: category.name,
  }));

export const getAllCreativeWriting = (): CreativeWritingProps[] => {
  const categories = getAllCategories();
  return creativeWritingJson.map((creativeWriting) => ({
    title: creativeWriting.title,
    description: creativeWriting.description,
    img: creativeWriting.image,
    isDownloable: creativeWriting.isDownloable,
    link: creativeWriting.link,
    categories: categories.filter((category) => creativeWriting.categoryIds.includes(category.id)),
  }));
};

export const getAllDigitalShowcases = (): Card[] =>
  digitalShowcasesJson.map((digitalShowcase) => ({
    title: digitalShowcase.title,
    desc: digitalShowcase.description,
    img: digitalShowcase.image,
    link: digitalShowcase.link,
    type: digitalShowcase.type as CardType,
  }));

export const getAllMediaSpotlight = (): Card[] =>
  mediaSpotlightsJson.map((mediaSpotlight) => ({
    title: mediaSpotlight.title,
    desc: mediaSpotlight.description,
    img: mediaSpotlight.image,
    link: mediaSpotlight.link,
    type: CardType.OTHER,
  }));

export const getAllTrainingServices = (): TrainingService[] =>
  trainingServicesJson.map((trainingService) => ({
    title: trainingService.title,
    description: trainingService.description,
    img: trainingService.image,
  }));
