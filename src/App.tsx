import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/sign-in';

export default function App() {
  const currentUser = null;

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)} />
        <Route exact path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}
