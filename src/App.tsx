import React, { useEffect } from 'react';
import {
  Switch, Route, useHistory,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/model';
import Navigation from 'src/components/navigation/navigation.component';
import HomePage from 'src/pages/home/home.component';
import SignInPage from 'src/pages/sign-in/sign-in.component';
import SignUpPage from 'src/pages/sign-up/sign-up.component';
import { signInStart } from 'src/redux/user/user.reducer';
import { GlobalStyles } from './global.styles';
import { getToken } from './redux/user/user.utils';

export default function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.credentials?.id);
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const history = useHistory();

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
        <Route exact path="/sign-in" render={() => (userId ? <HomePage /> : <SignInPage />)} />
        <Route exact path="/sign-up" render={() => (userId ? <HomePage /> : <SignUpPage />)} />
        <Route exact path="/" render={() => (userId ? <HomePage /> : <SignInPage />)} />
      </Switch>
    </>
  );
}
