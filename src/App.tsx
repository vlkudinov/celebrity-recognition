import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'src/components/private-route/private-route.component';
import Navigation from 'src/components/navigation/navigation.component';
import HomePage from 'src/pages/home/home.component';
import SignInPage from 'src/pages/sign-in/sign-in.component';
import SignUpPage from 'src/pages/sign-up/sign-up.component';
import { signInStart } from 'src/redux/user/user.reducer';
import { GlobalStyles } from 'src/global.styles';
import { getToken } from 'src/redux/user/user.utils';
import useNotifier from 'src/hooks/useNotifier';

const App: React.FC = () => {
  useNotifier();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();

    if (token) {
      dispatch(signInStart({}));
    }
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Switch>
        <PrivateRoute exact component={HomePage} path="/" />
        <Route exact component={SignUpPage} path="/sign-up" />
        <Route exact component={SignInPage} path="/sign-in" />
      </Switch>
    </>
  );
};

export default App;
