import React, { Fragment } from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT STARTS
// import setUpComponent from "./welcome";
import IndexPage from "./index"
//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT ENDS
import mailConfirm from './main/emails/mailConfirmation';
import createAccount from './main/invitationMail';
import ErrorPage from "./errorpage"

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

<<<<<<< HEAD:src/components/App.js
          {/* EMAIL CONFIRMATION PATH */}
          <Route path="/confirm-email" component={mailConfirm} />
          {/* EMAIL CONFIRMATION PATH */}

          {/* GETTING STARTED PAGE */}
          <Route path="/getting-started" component={createAccount} /> 
          {/* GETTING STARTED PAGE */}

          {/* ERROR 404 PAGE */}
          <Route path="*" component={ErrorPage} />
          {/* ERROR 404 PAGE */}
=======
          <Route path="/emailConfirmation" component={mailConfirm} />
          <Route path="/getting-started" component={InvitationMail} /> 
          <Route path="/create-account" component={createAccount} />
          <Route path="/terms-conditions" component={termsConditions} />
>>>>>>> develop:src/components/custom/App.js
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
