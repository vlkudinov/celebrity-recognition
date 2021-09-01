import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { BackdropStyled } from './loader.styles';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => (
  <BackdropStyled open={loading}>
    <CircularProgress color="inherit" />
  </BackdropStyled>
);

export default Loader;
