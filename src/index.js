import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import AppProvider from "./components/AppProvider/AppProvider";
import registerServiceWorker from "./registerServiceWorker";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import AppRoutes from "./routes/AppRoutes.js";
// position: positions.BOTTOM_CENTER
const options = {
  position: "bottom center",
  timeout: 5000,
  offset: "50px",
  transition: "scale",
};

Sentry.init({
  dsn:
    "https://699b1e8ac521472480bfa6292e042cb8@o323113.ingest.sentry.io/5270114",
});
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppProvider>
        <AlertProvider template={AlertTemplate} {...options}>
          <AppRoutes />
        </AlertProvider>
      </AppProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
