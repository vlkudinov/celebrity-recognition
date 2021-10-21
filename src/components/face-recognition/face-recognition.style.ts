import styled from '@emotion/styled';
import { BoundingBox } from 'src/model';
import { Theme } from '@emotion/react';

interface BoundingBoxProps {
  theme?: Theme;
  faceLocation: BoundingBox | null;
  show: boolean;
}

export const FaceRecognitionContainer = styled.div({
  position: 'relative',
});

export const FaceRecognitionImage = styled.img({
  width: 'auto',
  height: 560,
});

export const FaceRecognitionBoundingBox = styled.div(({ theme, faceLocation, show }: BoundingBoxProps) => ({
  display: 'flex',
  opacity: show ? 1 : 0,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  cursor: 'pointer',
  position: 'absolute',
  top: `${faceLocation?.topRow}px`,
  right: `${faceLocation?.rightCol}px`,
  bottom: `${faceLocation?.bottomRow}px`,
  left: `${faceLocation?.leftCol}px`,
  boxShadow: `0 0 0 2px ${theme?.palette.primary.main} inset`,
}));

export const FaceRecognitionResult = styled.span(({ theme, children }) => ({
  display: children ? 'block' : 'none',
  backgroundColor: theme?.palette.primary.main,
  color: theme?.palette.text.primary,
  marginRight: 'auto',
  marginTop: '-30px',
  height: '20px',
  padding: '5px 10px',
  boxSizing: 'content-box',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
}));
