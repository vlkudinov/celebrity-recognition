import * as React from 'react';
import FaceRecognition from 'src/components/face-recognition/face-recognition.component';
import ImageLinkForm from 'src/components/image-link-form/image-link-form.component';
import HistoryPanel from 'src/components/history-panel/history-panel.component';
import PredictionList from 'src/components/prediction-list/prediction-list.components';
import withAccordion from 'src/components/withAccordion/withAccordions.component';
import { ImageBlock, InputBlock, HomePageContainer } from './home.styles';

const ImageLinkFormWithAccordion = () => withAccordion(ImageLinkForm, 'input');
const PredictionListWithAccordion = () => withAccordion(PredictionList, 'predictions');

export default function HomePage() {
  return (
    <HomePageContainer container spacing={0}>
      <HistoryPanel />
      <ImageBlock item xs={8}>
        <FaceRecognition />
      </ImageBlock>
      <InputBlock item xs={4}>
        <ImageLinkFormWithAccordion />
        <PredictionListWithAccordion />
      </InputBlock>
    </HomePageContainer>
  );
}
