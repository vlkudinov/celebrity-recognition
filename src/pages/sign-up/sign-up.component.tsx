import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../model';
import { signUpStart } from '../../redux/user/user.reducer';
import {
  BoxStyled, AvatarStyled, Form, SubmitButton,
} from './sign-up.styles';
import Loader from '../../components/loader/loader.component';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const initialState = {
    email: '', password: '', firstName: '', lastName: '',
  };
  const [userCredentials, setCredentials] = useState(initialState);
  const {
    email, password, firstName, lastName,
  } = userCredentials;
  const loading = useSelector(({ user }: RootState) => user.loading);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(signUpStart({
      email, password, firstName, lastName,
    }));
    setCredentials(initialState);
  };

  const handleChange = ({ target: { value, name } } : React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Loader loading={loading} />
      <BoxStyled>
        <AvatarStyled>
          <LockOutlinedIcon />
        </AvatarStyled>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <SubmitButton type="submit" fullWidth variant="contained">
            Sign Up
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </BoxStyled>
    </Container>
  );
}
