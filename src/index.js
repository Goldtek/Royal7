import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from '@sentry/browser';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Route from "./routes";
import { store, persistor } from './stores';
import history from "./components/history";

Sentry.init({dsn: "https://699b1e8ac521472480bfa6292e042cb8@o323113.ingest.sentry.io/5270114"});
ReactDOM.render(
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <Router forceRefresh={true} history={history}>
            <Route />
        </Router>
     </Provider>,
    document.getElementById("root")
);
