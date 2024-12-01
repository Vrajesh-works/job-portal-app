import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ 
  component: Component, 
  allowedRoles, 
  ...rest 
}) => {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props => {
        // Check if user is authenticated
        if (!isAuthenticated) {
          return <Redirect to="/login" />;
        }

        // If roles are specified, check user role
        if (allowedRoles && allowedRoles.length > 0) {
          if (!user || !allowedRoles.includes(user.type)) {
            return <Redirect to="/" />;
          }
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;