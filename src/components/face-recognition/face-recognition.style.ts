import styled from '@emotion/styled';
import { BoundingBox } from 'src/model';
import { Theme } from '@emotion/react';

interface BoundingBoxProps {
  faceLocation: BoundingBox | null,
  theme?: Theme
}

export const FaceRecognitionContainer = styled.div({
  position: 'relative',
});

export const FaceRecognitionImage = styled.img({
  width: 'auto',
  height: 600,
});

export const FaceRecognitionBoundingBox = styled.div((props: BoundingBoxProps) => ({
  top: `${props.faceLocation?.topRow}px`,
  right: `${props.faceLocation?.rightCol}px`,
  bottom: `${props.faceLocation?.bottomRow}px`,
  left: `${props.faceLocation?.leftCol}px`,
  position: 'absolute',
  boxShadow: `0 0 0 3px ${props.theme?.palette.primary.main} inset`,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  cursor: 'pointer',
}));

export const FaceRecognitionResult = styled.span((props) => ({
  display: props.children ? 'flex' : 'none',
  backgroundColor: props.theme.palette.primary.main,
  marginRight: 'auto',
  marginTop: '-30px',
  height: '20px',
  padding: '5px 10px',
  boxSizing: 'content-box',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
}));
