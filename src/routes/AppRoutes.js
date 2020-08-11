import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  NotFound,
  PasswordReset,
  Signin,
  ValidateEmail,
  CreateAccount,
  EmailSent,
  EmailConfirmation,
  IndexPage,
} from "../pages";
import { Role } from "../_helpers/role";
import { Helmet } from "react-helmet";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../containers/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={IndexPage} />

        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          roles={[Role.Admin, Role.Student, Role.Teacher]}
        />
        {/*SCREEN ROUTES */}
        <Route exact path="/create" component={ValidateEmail} />
        <Route exact path="/sent" component={EmailSent} />
        <Route
          exact
          path="/continue"
          render={(props) => (
            <Fragment>
              <Helmet>
                <title>Continue Registeration</title>
              </Helmet>
              <CreateAccount {...props} />
            </Fragment>
          )}
        />

        <Route
          exact
          path="/confirm/:email/:code"
          render={(props) => (
            <Fragment>
              <Helmet>
                <title>Email Verification</title>
              </Helmet>
              <EmailConfirmation {...props} />
            </Fragment>
          )}
        />
        {/*SCREEN ROUTES */}
        <Route exact path="/forgot" component={PasswordReset} />
        <Route exact path="/signin" component={Signin} />
        <Route path="*">
          <Fragment>
            <title>Error 404 </title>
            <NotFound />
          </Fragment>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
