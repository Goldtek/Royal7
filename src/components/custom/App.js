import React, { Fragment } from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT STARTS
// import setUpComponent from "./welcome";
import IndexPage from "../index"
//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT ENDS
import mailConfirm from '../main/emails/mailConfirmation';
import InvitationMail from '../main/invitationMail';
import createAccount from '../main/createAccount';
import termsConditions from '../main/terms-conditions';

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

          <Route path="/emailConfirmation" component={mailConfirm} />
          <Route path="/invitation-mail" component={InvitationMail} /> 
          <Route path="/create-account" component={createAccount} />
          <Route path="/terms-conditions" component={termsConditions} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
