import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';

function InteractiveRoute({ component: Component, isAccepted, redirectPath, ...rest }) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={props =>
        isAccepted() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

InteractiveRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAccepted: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default InteractiveRoute;
