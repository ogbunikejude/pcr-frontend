import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../Context/auth/provider';

export const PrivateRoute = ({ path, exact, children }) => {
  const { authState } = useContext(AuthContext);
  // console.log(authState);

  // Check if user is logged in
  if (!authState) {
    return <Redirect to="/user/login" />;
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};
