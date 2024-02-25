export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleChange: (e: number) => void;
}
