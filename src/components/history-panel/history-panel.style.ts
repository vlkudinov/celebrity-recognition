import styled from '@emotion/styled';
import { Button, Box, Drawer } from '@mui/material';

export const HistoryPanelDrawer = styled(Drawer)({
  '.MuiDrawer-paper': {
    backgroundImage: 'none',
  },
});

export const ButtonPanel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  height: '100%',
  maxWidth: 60,
  backgroundColor: theme.palette.primary.main,
}));

export const VerticalButton = styled(Button)({
  WebkitTransform: 'rotate(270deg)',
});
