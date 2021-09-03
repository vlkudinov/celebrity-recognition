import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Loader from 'src/components/loader/loader.component';
import { RootState } from 'src/model';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { signInStart } from '../../redux/user/user.reducer';
import {
  BoxStyled, AvatarStyled, Form, SubmitButton,
} from './sign-in.styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const initialState = { email: '', password: '' };
  const [userCredentials, setCredentials] = useState(initialState);
  const { email, password } = userCredentials;
  const loading = useSelector(({ user }: RootState) => user.loading);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(signInStart({ email, password }));
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
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit} noValidate>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <SubmitButton type="submit" fullWidth variant="contained">
            Sign In
          </SubmitButton>
          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Form>
      </BoxStyled>
    </Container>
  );
}
