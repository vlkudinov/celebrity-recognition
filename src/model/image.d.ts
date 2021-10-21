interface ImageConcept {
  app_id: string;
  created_at: null;
  definition: string;
  id: string;
  language: string;
  name: string;
  user_id: string;
  value: number;
  visibility: null;
  vocab_id: string;
}

interface ClarifaiBoundingBox {
  bottom_row: number;
  left_col: number;
  right_col: number;
  top_row: number;
}

interface BoundingBox {
  topRow: number;
  rightCol: number;
  bottomRow: number;
  leftCol: number;
}

interface ImageData {
  id: string;
  value: number;
  name: string;
  box: ClarifaiBoundingBox;
  concepts: ImageConcept[];
}

export interface ImageState {
  id: string;
  input: string;
  imageUrl: string;
  width: number;
  height: number;
  loading: boolean;
  error: Error | null;
  data: ImageData[] | [];
}

export interface PixelCrop {
  width: number;
  height: number;
  x: number;
  y: number
}
