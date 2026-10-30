export interface AcademicTeaching {
  title: string;
  description: string;
  img: string | null;
}

export interface AcademicPaper {
  title: string;
  description: string;
  img: string | null;
  isDownloable: boolean;
  link: string;
}
