export interface CardSliderProps {
  cards: Card[];
}

export interface Card {
  title: string;
  desc: string;
  img: string | null;
  link: string;
  type: CardType;
}

export enum CardType {
  YOUTUBE = 'youtube',
  OTHER = 'other',
  DOWNLOADABLE = 'downloadable',
}
