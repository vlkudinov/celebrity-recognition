import React from 'react';
import { RouteProps } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from 'src/model';
import SignInPage from 'src/pages/sign-in/sign-in.component';
import { Route } from 'react-router-dom';

const PrivateRoute : React.FC<RouteProps> = ({ component, ...options } : RouteProps) => {
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const finalComponent = isSignedIn ? component : SignInPage;

  return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute;
