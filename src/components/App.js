import React, { Fragment } from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT STARTS
// import setUpComponent from "./welcome";
import IndexPage from "./index"
//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT ENDS
import mailConfirm from './main/emails/mailConfirmation';
import createAccount from './main/invitationMail';
import termsConditions from './main/terms-conditions';
import accountSettings from './main/account-settings';
import ErrorPage from './errorpage';

function App() {
  return (
    <Fragment>
      <BrowserRouter  forceRefresh={true}>
        <Switch>
          <Route
            exact
            path="/"

            render={() => (
              <>
                <Helmet>
                  <title>Royal</title>
                </Helmet>
                <IndexPage/>
              </>
            )}
          />
          {/* <Route path="/setup" component={setUpComponent} /> */}

          {/* EMAIL CONFIRMATION PATH URL */}
          <Route exact path="/confirm-email" component={mailConfirm} />
          {/* EMAIL CONFIRMATION PATH */}

          {/* GETTING STARTED PAGE  URL*/}
          <Route exact path="/create" component={createAccount} /> 
          {/* GETTING STARTED PAGE */}

          {/* GETTING TERMS AND CONDITIONS  URL*/}
          <Route exact path="/terms-conditions" component={termsConditions} /> 
          {/* GETTING STARTED PAGE */}

          {/* GETTING ACCOUNT SETTINGS PAGE  URL*/}
          <Route exact path="/settings" component={accountSettings} /> 
          {/* GETTING STARTED PAGE */}

          {/* ERROR 404 PAGE */}
          <Route path="*" component={ErrorPage} />
          {/* ERROR 404 PAGE */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
