import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

export const HomePageContainer = styled(Grid)({
  flexGrow: 1,
  marginTop: 0,
  height: 'calc(100% - 64px)',
  flexWrap: 'nowrap',
});

export const ImageBlock = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '100%',
  padding: '0px !important',
  overflowY: 'scroll',
});

export const InputBlock = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  padding: 30,
  height: '100%',
  overflowY: 'scroll',
}));
