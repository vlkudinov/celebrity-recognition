import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export const BoxStyled = styled(Box)({
  marginTop: 40,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const AvatarStyled = styled(Avatar)({},
  ({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    margin: 5,
  }));

export const Form = styled.form({
  width: '100%', // Fix IE 11 issue.
  marginTop: 10,
});

export const SubmitButton = styled(Button)({},
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    margin: '5px 0',
  }));
