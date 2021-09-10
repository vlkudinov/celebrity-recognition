import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { RootState } from 'src/model';
import {
  PredictionListContainer, PredictionListItem, PredictionListName, PredictionListValue,
} from './prediction-list.styles';

const PredictionList = () => {
  const concepts = useSelector(({ image }: RootState) => image.concepts);

  if (!concepts.length) {
    return <Typography>NO PREDICTIONS</Typography>;
  }

  return (
    <PredictionListContainer>
      {concepts.map(({ id, name, value }) => (
        <PredictionListItem key={id}>
          <PredictionListName>{name}</PredictionListName>
          <PredictionListValue>{value.toFixed(2)}</PredictionListValue>
        </PredictionListItem>
      ))}
    </PredictionListContainer>
  );
};

export default PredictionList;
