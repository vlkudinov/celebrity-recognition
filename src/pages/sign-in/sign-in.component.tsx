import React, { useState } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { RootState } from 'src/model';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart } from 'src/redux/user/user.reducer';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Loader from 'src/components/loader/loader.component';
import { Link, Container, Typography, Grid, TextField } from '@mui/material';
import { BoxStyled, AvatarStyled, Form, SubmitButton } from 'src/pages/sign-in/sign-in.styles';

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const loading = useSelector(({ user }: RootState) => user.loading);
  const initialState = { email: '', password: '' };
  const [userCredentials, setCredentials] = useState(initialState);
  const { email, password } = userCredentials;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signInStart({ email, password }));
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
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
          />
          <SubmitButton type="submit" fullWidth variant="contained">
            Sign In
          </SubmitButton>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/sign-up" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Form>
      </BoxStyled>
    </Container>
  );
};

export default SignInPage;
