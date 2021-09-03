import React, { useEffect } from 'react';
import {
  Switch, Route, Redirect, useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/model';
import Navigation from './components/navigation/navigation.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';

export default function App() {
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const history = useHistory();

  useEffect(() => {
    if (isSignedIn) {
      history.push('/');
    } else {
      history.push('/sign-in');
    }
  });

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => (isSignedIn ? <Redirect to="/" /> : <SignInPage />)} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
      </Switch>
    </div>
  );
}
