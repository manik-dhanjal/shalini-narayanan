import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface CardSliderProps {
  cards: Card[];
}

export interface Card {
  title: string;
  desc: string;
  img: IGatsbyImageData;
  link: string;
  type: CardType;
}

export enum CardType {
  YOUTUBE = 'youtube',
  OTHER = 'other',
  DOWNLOADABLE = 'downloadable',
}
