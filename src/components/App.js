import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT STARTS
// import setUpComponent from "./welcome";
import IndexPage from "./index";
//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT ENDS
import {
    mailConfirm,
    createAccount,
    continuation,
    Error404Page,
    history,
    emailSentNotification
} from "./exports";

const App = () => (
    
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

                {/* EMAIL CONFIRMATION PATH URL */}
                <Route path="/confirm-email" component={mailConfirm} />
                {/* EMAIL CONFIRMATION PATH */}

                {/* GETTING STARTED PAGE */}
                <Route path="/create" component={createAccount} />
                {/* GETTING STARTED PAGE */}

                {/* GETTING STARTED PAGE */}
                <Route path="/continue" component={continuation} />
                {/* GETTING STARTED PAGE */}

                {/* GETTING STARTED PAGE */}
                <Route path="/sent" component={emailSentNotification} />
                {/* GETTING STARTED PAGE */}

                {/* ERROR 404 PAGE */}
                <Route path="*" component={Error404Page} />
                {/* ERROR 404 PAGE */}
            </Switch>
        </Router>
    
);

export default App;
