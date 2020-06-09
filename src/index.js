import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from '@sentry/browser';
import Route from "./routes";
// import store from './stores';
import { BrowserRouter as Router } from "react-router-dom";
import history from "./components/history";
// import { Provider } from 'react-redux';

Sentry.init({dsn: "https://699b1e8ac521472480bfa6292e042cb8@o323113.ingest.sentry.io/5270114"});
ReactDOM.render(
    // <Provider store={store}>
    <Router forceRefresh={true} history={history}>
        <Route />
    </Router>,
    // </Provider>
    document.getElementById("root")
);
