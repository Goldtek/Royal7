import React from "react";
import ReactDOM from "react-dom";
import Route from "./routes";
// import store from './stores';
import { BrowserRouter as Router } from "react-router-dom";
import history from "./components/history";
// import { Provider } from 'react-redux';
ReactDOM.render(
    // <Provider store={store}>
    <Router forceRefresh={true} history={history}>
        <Route />
    </Router>,
    // </Provider>
    document.getElementById("root")
);
