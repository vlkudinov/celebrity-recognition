import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { RootState } from 'src/model';
import { signUpStart } from 'src/redux/user/user.reducer';
import Loader from 'src/components/loader/loader.component';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, Grid, Typography, Container, TextField } from '@mui/material';
import { BoxStyled, AvatarStyled, Form, SubmitButton } from 'src/pages/sign-up/sign-up.styles';

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({ user }: RootState) => user.loading);
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const initialState = { email: '', password: '', firstName: '', lastName: '' };
  const [userCredentials, setCredentials] = useState(initialState);
  const { email, password, firstName, lastName } = userCredentials;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signUpStart(userCredentials));
    setCredentials(initialState);
  };

  const handleChange = ({ target: { value, name } } : React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...userCredentials, [name]: value });
  };

  if (isSignedIn) {
    return <Redirect to="/" />;
  }

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
        <Form onSubmit={handleSubmit}>
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
          </Grid>
          <SubmitButton type="submit" fullWidth variant="contained">
            Sign Up
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </BoxStyled>
    </Container>
  );
};

export default SignUpPage;
