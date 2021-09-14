import styled from '@emotion/styled';
import { BoundingBox } from 'src/model';
import { Theme } from '@emotion/react';
import React from 'react';

interface ResultProps {
  hovered: boolean;
  theme?: Theme;
  children? : React.ReactNode
}

interface BoundingBoxProps extends ResultProps {
  faceLocation: BoundingBox | null,
}

export const FaceRecognitionContainer = styled.div({
  position: 'relative',
});

export const FaceRecognitionImage = styled.img({
  width: 'auto',
  height: 560,
});

// eslint-disable-next-line max-len
export const FaceRecognitionBoundingBox = styled.div(({ theme, faceLocation, hovered }: BoundingBoxProps) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  cursor: 'pointer',
  position: 'absolute',
  top: `${faceLocation?.topRow}px`,
  right: `${faceLocation?.rightCol}px`,
  bottom: `${faceLocation?.bottomRow}px`,
  left: `${faceLocation?.leftCol}px`,
  boxShadow: `0 0 0 2px ${hovered ? theme?.palette.text.secondary : theme?.palette.primary.main} inset`,
  transition: '.5s box-shadow',
}));

export const FaceRecognitionResult = styled.span(({ theme, hovered, children }: ResultProps) => ({
  display: children ? 'block' : 'none',
  // fontSize: '0.8em',
  backgroundColor:
      hovered
        ? theme?.palette.text.secondary
        : theme?.palette.primary.main,
  color:
      hovered
        ? theme?.palette.getContrastText(theme?.palette.text.primary)
        : theme?.palette.text.primary,
  marginRight: 'auto',
  marginTop: '-30px',
  height: '20px',
  padding: '5px 10px',
  boxSizing: 'content-box',
  textTransform: 'capitalize',
  transition: '.5s all',
  whiteSpace: 'nowrap',
  // width: hovered ? 'auto' : '100%',
  // overflow: hovered ? 'unset' : 'hidden',
  // textOverflow: 'ellipsis',
}));
