export interface AcademicTeachingImage {
  src: string;
  caption: string | null;
}

export interface AcademicTeaching {
  title: string;
  description: string;
  images: AcademicTeachingImage[];
}

export interface AcademicPaper {
  title: string;
  description: string;
  img: string | null;
  isDownloable: boolean;
  link: string;
}
