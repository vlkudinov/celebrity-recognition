import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const NavigationContainer = styled.div({
  flexGrow: 1,
});

export const MenuLink = styled(Button)({
  marginRight: 10,
  color: 'white',
}) as typeof Button;
