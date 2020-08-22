import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { history } from "../_helpers";

const PrivateRoute = ({ component: Component, userauth, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const authCheck = userauth.isAuthenticated;
      const role = userauth.user.role;
      // console.log(roles);
      if (!authCheck) {
        // not logged in so redirect to login page with the return url
        // return <Redirect to={{ pathname: "/signin" }} />;

        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location, info: "You are not authorized" },
            }}
          />
        );

        // history.push("/signin");
      }

      // check if route is restricted by role
      if (roles && roles.indexOf(role) === -1) {
        // role not authorised so redirect to home page
        // history.goBack();
        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: {
                from: props.location,
                info: "You are not authorized!",
              },
            }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  userauth: state.authentication,
});
export default connect(mapStateToProps, null)(PrivateRoute);
