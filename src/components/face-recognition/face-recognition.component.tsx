import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageSize, getHoveredFaceId } from 'src/redux/image/image.reducer';
import { RootState } from 'src/model';
import { selectFaceLocation } from 'src/redux/image/image.selectors';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import {
  FaceRecognitionContainer, FaceRecognitionImage, FaceRecognitionBoundingBox, FaceRecognitionResult,
} from './face-recognition.style';

const FaceRecognition = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({ image } : RootState) => image.loading);
  const imageUrl = useSelector(({ image }: RootState) => image.imageUrl);
  const hoveredFaceId = useSelector(({ image }: RootState) => image.id);
  const error = useSelector(({ image }: RootState) => image.error);
  const faceLocation = useSelector(selectFaceLocation);

  const handleLoad = ({ target: { width, height } } : React.ChangeEvent<HTMLImageElement>) => {
    dispatch(setImageSize({ width, height }));
  };

  const handleMouseEnter = (id: string) => {
    dispatch(getHoveredFaceId(id));
  };

  const handleMouseLeave = (id: string) => {
    dispatch(getHoveredFaceId(id));
  };

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

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
          faceLocation={boundingBox}
          hovered={hoveredFaceId === id}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={() => handleMouseLeave('')}
        >
          <FaceRecognitionResult hovered={hoveredFaceId === id}>
            {name}
          </FaceRecognitionResult>
        </FaceRecognitionBoundingBox>
      ))}

    </FaceRecognitionContainer>
  );
};

export default FaceRecognition;
