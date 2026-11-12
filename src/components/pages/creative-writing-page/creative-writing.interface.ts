export interface Category {
  name: string;
  id: string;
}
export interface CreativeWritingProps {
  title: string;
  description: string;
  link: string;
  isDownloable: boolean;
  img: string | null;
  categories: Category[];
}
