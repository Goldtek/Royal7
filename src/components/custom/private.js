import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props =>
    props.isAuthenticated ? (
        <Component {...props} />
    ) : (
        <Redirect to={{ pathname: "/" }} />
    )
    }
    />
);

const mapStateToProps = ({ User: { isAuthenticated } }) => ({
    isAuthenticated,
  });

export default connect(mapStateToProps)(PrivateRoute);