import { ClarifaiBoundingBox, ImageConcept } from './image';

export interface HistoryImage {
  id: number;
  link: string;
  name: string;
  created_at: string;
  concepts: ImageConcept[] | [];
  box: ClarifaiBoundingBox | null;
}

export interface HistoryState {
  images: HistoryImage[] | [];
  loading: boolean;
  error: Error | null;
}
