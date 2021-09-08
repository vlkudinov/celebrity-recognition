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

interface SendImagePayload {
  id: string;
  value: number;
  concepts: ImageConcept[] | [];
  box: ClarifaiBoundingBox | null;
}

export interface ImageState {
  id: string;
  input: string;
  imageUrl: string;
  width: number;
  height: number;
  value: number;
  concepts: ImageConcept[] | []
  box: Box | null;
  loading: boolean;
  error: unknown | null;
}
