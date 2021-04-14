import React from 'react';
import { Route } from 'react-router-dom';
import RegisteredLayout from '../../layouts/RegisteredLayout';

const RegisteredUserRoute = ({ component: Component, ...rest }: IRouteProps) => (
  <Route
    {...rest}
    render={(props) => (
      <RegisteredLayout>
        <Component {...props} />
      </RegisteredLayout>
    )}
  />
);

export default RegisteredUserRoute;