import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageSize } from 'src/redux/image/image.reducer';
import { RootState } from 'src/model';
import { selectFaceLocation } from 'src/redux/image/image.selectors';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import {
  FaceRecognitionBoundingBox,
  FaceRecognitionContainer,
  FaceRecognitionImage,
  FaceRecognitionResult,
} from './face-recognition.style';

const FaceRecognition = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({ image } : RootState) => image.loading);
  const imageUrl = useSelector(({ image }: RootState) => image.imageUrl);
  const hoveredFaceId = useSelector(({ image }: RootState) => image.id);
  const faceLocation = useSelector(selectFaceLocation);

  const handleLoad = ({ target: { width, height } } : React.ChangeEvent<HTMLImageElement>) => {
    dispatch(setImageSize({ width, height }));
  };

  if (loading) {
    return <Skeleton variant="rectangular" width={500} height={560} />;
  }

  if (!imageUrl) {
    return <Typography>Please enter image link and click Send Link</Typography>;
  }
  return (
    <FaceRecognitionContainer>
      <FaceRecognitionImage src={imageUrl} onLoad={handleLoad} />
      {faceLocation.map(({ id, boundingBox, name }) => (
        <FaceRecognitionBoundingBox
          key={id}
          show={hoveredFaceId === id || !hoveredFaceId}
          faceLocation={boundingBox}
        >
          <FaceRecognitionResult>
            {name}
          </FaceRecognitionResult>
        </FaceRecognitionBoundingBox>
      ))}
    </FaceRecognitionContainer>
  );
};

export default FaceRecognition;
