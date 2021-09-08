import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

export const HomePageContainer = styled(Box)({
  flexGrow: 1,
  marginTop: 16,
});

export const ImageBlock = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export const InputBlock = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  padding: 30,
  minHeight: '100vh',
}));
