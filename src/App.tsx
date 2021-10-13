import React, { useEffect } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/model';
import Navigation from 'src/components/navigation/navigation.component';
import HomePage from 'src/pages/home/home.component';
import SignInPage from 'src/pages/sign-in/sign-in.component';
import SignUpPage from 'src/pages/sign-up/sign-up.component';
import { signInStart } from 'src/redux/user/user.reducer';
import { GlobalStyles } from 'src/global.styles';
import { getToken } from 'src/redux/user/user.utils';
import useNotifier from 'src/hooks/useNotifier';

export default function App() {
  useNotifier();
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);

  useEffect(() => {
    const token = getToken();

    if (token) {
      dispatch(signInStart());
    }
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Switch>
        <Route exact path="/sign-in" render={() => (isSignedIn ? <HomePage /> : <SignInPage />)} />
        <Route exact path="/sign-up" render={() => (isSignedIn ? <HomePage /> : <SignUpPage />)} />
        <Route exact path="/" render={() => (isSignedIn ? <HomePage /> : <SignInPage />)} />
      </Switch>
    </>
  );
}
