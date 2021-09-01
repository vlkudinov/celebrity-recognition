import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import SignInPage from './pages/sign-in/sign-in.component';

export default function App() {
  const currentUser = null;

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)} />
        <Route exact path="/sign-in" component={SignInPage} />
      </Switch>
    </div>
  );
}
