import { ImageData } from './image';

export interface HistoryImage {
  id: number;
  link: string;
  name: string;
  created_at: string;
  data: ImageData[] | [];
}

export interface HistoryState {
  images: HistoryImage[] | [];
  loading: boolean;
  error: Error | null;
}
