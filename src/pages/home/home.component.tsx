import * as React from 'react';
import Grid from '@mui/material/Grid';
import FaceRecognition from 'src/components/face-recognition/face-recognition.component';
import ImageLinkForm from 'src/components/image-link-form/image-link-form.component';
import { ImageBlock, InputBlock, HomePageContainer } from './home.styles';

export default function HomePage() {
  return (
    <HomePageContainer>
      <Grid container spacing={2}>
        <ImageBlock item xs={8}>
          <FaceRecognition />
        </ImageBlock>
        <InputBlock item xs={4}>
          <ImageLinkForm />
        </InputBlock>
      </Grid>
    </HomePageContainer>
  );
}
