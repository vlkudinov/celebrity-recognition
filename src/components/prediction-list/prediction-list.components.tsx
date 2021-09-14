import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { selectPredictionList } from 'src/redux/image/image.selectors';
import {
  PredictionListContainer, PredictionListItem, PredictionListName, PredictionListValue,
} from './prediction-list.styles';

const PredictionList = () => {
  const predictions = useSelector(selectPredictionList);

  if (!predictions.length) {
    return <Typography>NO PREDICTIONS</Typography>;
  }

  return (
    <PredictionListContainer>
      {predictions.map(({ concepts, id: id1 }) => (
        <div style={{ marginTop: 20, borderBottom: '1px solid light-gray' }} key={id1}>
          {concepts.map(({ id: id2, name, value }) => (
            <PredictionListItem key={id2}>
              <PredictionListName>{name}</PredictionListName>
              <PredictionListValue>{value.toFixed(2)}</PredictionListValue>
            </PredictionListItem>
          ))}
        </div>

      ))}
    </PredictionListContainer>
  );
};

export default PredictionList;
