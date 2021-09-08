import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageSize } from 'src/redux/image/image.reducer';
import { RootState } from 'src/model';
import { selectFaceLocation, selectResultValue } from 'src/redux/image/image.selectors';
import Skeleton from '@mui/material/Skeleton';
import {
  FaceRecognitionContainer, FaceRecognitionImage, FaceRecognitionBoundingBox, FaceRecognitionResult,
} from './face-recognition.style';

const FaceRecognition = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({ image } : RootState) => image.loading);
  const imageUrl = useSelector(({ image }: RootState) => image.imageUrl);
  const faceLocation = useSelector(selectFaceLocation);
  const recognitionResult = useSelector(selectResultValue);

  const handleLoad = ({ target: { width, height } } : React.ChangeEvent<HTMLImageElement>) => {
    dispatch(setImageSize({ width, height }));
  };

  if (loading) {
    return <Skeleton variant="rectangular" width={500} height={600} />;
  }

  return (
    <FaceRecognitionContainer>
      <FaceRecognitionImage src={imageUrl} onLoad={handleLoad} />
      <FaceRecognitionBoundingBox faceLocation={faceLocation}>
        <FaceRecognitionResult>
          {recognitionResult?.name}
        </FaceRecognitionResult>
      </FaceRecognitionBoundingBox>
    </FaceRecognitionContainer>
  );
};

export default FaceRecognition;
