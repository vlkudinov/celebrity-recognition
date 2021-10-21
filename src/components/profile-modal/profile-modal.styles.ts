import { Stack, Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  backgroundColor: theme.palette.grey['900'],
  border: '2px solid #000',
  boxShadow: theme.shadows['5'],
  padding: 20,
}));
export const ModalAvatarContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px 0',
});

export const ModalProfileSubtitle = styled(Typography)({
  display: 'flex',
  alignItems: 'flex-end',
  lineHeight: 1,
  margin: '5px 0',
  svg: {
    marginRight: 5,
  },
});

export const ModalButtonGroup = styled(Stack)({
  margin: '20px 0',
});
