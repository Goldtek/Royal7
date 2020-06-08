import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT STARTS
// import setUpComponent from "./welcome";
import IndexPage from "./components/index";
//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT ENDS

/*

NOTE:Use PascalCase for React components, or lowercase for HTML elements. DUE TO THE ROUTING PATTERN PLEASE USE PascalCasing to avoid error

*/
/*
GENERAL IMPORT STARTS HERE ##################
*/

import {
    MailConfirm,
    CreateAccountScreen,
    ContinuationScreen,
    Error404Page,
    history,
    EmailSentNotificationScreen,
    EmailActivationScreen,
    TermsConditions,
} from "./components/exports";
/*
GENERAL IMPORT ENDS HERE ##################
*/

/* ADMIN DASHBOARD IMPORT STARTS HERE #####################################*/
import { DashboardComponent } from "./components/dashboard";
/* ADMIN DASHBOARD IMPORT STARTS HERE #####################################*/

const Routes = () => (
    <Router forceRefresh={true} history={history}>
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <>
                        <Helmet>
                            <title>Royal</title>
                        </Helmet>
                        <IndexPage />
                    </>
                )}
            />
            {/* <Route path="/setup" component={setUpComponent} /> */}

            {/* Screen for user to input confirmation code start path */}
            {/* <Route path="/confirm-email">
                <MailConfirm />
            </Route> */}
            {/* Screen for user to input confirmation code start path */}

            {/* Getting Started Account Creation Start path */}
            <Route path="/create">
                <Fragment>
                    <Helmet>
                        <title>Create Account</title>
                    </Helmet>
                    <CreateAccountScreen />
                </Fragment>
            </Route>
            {/* Getting Started Account Creation Start path */}

            {/* Registration Screen after email confirmation START path */}
            <Route path="/continue">
                <Fragment>
                    <Helmet>
                        <title>Continue Registration</title>
                    </Helmet>
                    <ContinuationScreen />
                </Fragment>
            </Route>
            {/* Registration Screen after email confirmation End path */}

            {/* Notification for email action success screen START path */}
            <Route path="/sent/:email">
                <Fragment>
                    <Helmet>
                        <title>Email Sent</title>
                    </Helmet>
                    <EmailSentNotificationScreen />
                </Fragment>
            </Route>
            {/* Notification for email action success screen End path */}

            {/* Notification for email action success screen START path */}

            <Route
                exact
                path="/confirm/:email/:code"
                render={(props) => (
                    <Fragment>
                        <Helmet>
                            <title>Email Verification</title>
                        </Helmet>
                        <EmailActivationScreen {...props} />
                    </Fragment>
                )}
            />

            {/* Notification for email action success screen End path */}

            {/* Notification for email action success screen START path */}
            <Route path="/terms-conditions">
                <TermsConditions />
            </Route>
            {/* Notification for email action success screen End path */}

            {/* DASHBOARD ROUTES GOES STARTS HERE ############################################################### */}
            <Route
                exact
                path="/dashboard"
                render={() => (
                    <>
                        <Helmet>
                            <title>Admin</title>
                        </Helmet>
                        <DashboardComponent />
                    </>
                )}
            />
            {/* DASHBOARD ROUTES GOES STARTS HERE ############################################################### */}
            {/* ERROR 404 path */}

            <Route path="*">
                <Fragment>
                    <title>Error 404 </title>
                    <Error404Page />
                </Fragment>
            </Route>
            {/* ERROR 404 path */}
        </Switch>
    </Router>
);

export default Routes;
