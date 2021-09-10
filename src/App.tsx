import React from 'react';
import {
  Switch, Route, useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/model';
import Navigation from 'src/components/navigation/navigation.component';
import HomePage from 'src/pages/home/home.component';
import SignInPage from 'src/pages/sign-in/sign-in.component';
import SignUpPage from 'src/pages/sign-up/sign-up.component';
import { GlobalStyles } from './global.styles';

export default function App() {
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const history = useHistory();

  // useEffect(() => {
  //   if (isSignedIn) {
  //     history-panel.push('/');
  //   } else {
  //     history-panel.push('/sign-in');
  //   }
  // });

  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        {/* <Route exact path="/" render={() => (isSignedIn ? <HomePage /> : <SignInPage />)} /> */}
      </Switch>
    </>
  );
}
