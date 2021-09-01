import styled from '@emotion/styled';
import Backdrop from '@mui/material/Backdrop';

export const BackdropStyled = styled(Backdrop)({},
  ({ theme }) => ({
    color: '#fff',
    zIndex: theme.zIndex.drawer + 1,
  }));
