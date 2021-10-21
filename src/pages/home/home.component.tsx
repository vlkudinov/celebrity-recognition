import React from 'react';
import FaceRecognition from 'src/components/face-recognition/face-recognition.component';
import ImageLinkForm from 'src/components/image-link-form/image-link-form.component';
import HistoryPanel from 'src/components/history-panel/history-panel.component';
import PredictionList from 'src/components/prediction-list/prediction-list.components';
import Accordion from 'src/components/accordion/accordion.component';
import { ImageBlock, InputBlock, HomePageContainer } from 'src/pages/home/home.styles';

const HomePage : React.FC = () => (
  <HomePageContainer container spacing={0}>
    <HistoryPanel />
    <ImageBlock item xs={8}>
      <FaceRecognition />
    </ImageBlock>
    <InputBlock item xs={4}>
      <Accordion title="input">
        <ImageLinkForm />
      </Accordion>
      <Accordion title="predictions">
        <PredictionList />
      </Accordion>
    </InputBlock>
  </HomePageContainer>
);

export default HomePage;
