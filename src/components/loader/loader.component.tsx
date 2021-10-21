import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LoaderProps } from 'src/components/loader/loader.interface';
import { BackdropStyled } from 'src/components/loader/loader.styles';

const Loader: React.FC<LoaderProps> = ({ loading }) => (
  <BackdropStyled open={loading}>
    <CircularProgress color="inherit" />
  </BackdropStyled>
);

export default Loader;
