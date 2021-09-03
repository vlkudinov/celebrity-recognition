import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export const BoxStyled = styled(Box)({
  marginTop: 64,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const AvatarStyled = styled(Avatar)({},
  ({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    margin: 8,
  }));

export const Form = styled.form({
  width: '100%', // Fix IE 11 issue.
  marginTop: 10,
});

export const SubmitButton = styled(Button)({},
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    margin: '24px 0 16px',
  }));
