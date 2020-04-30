import React, { Fragment } from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";
import mailConfirm from '../components/main/emails/mailConfirmation';
import InvitationMail from '../components/main/invitationMail';

//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT STARTS
// import setUpComponent from "./welcome";
import IndexPage from "../components/index"
//############### IMPORT COMPNENTS FROM THE INDEXED EXPORT ENDS

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
                  <title>Royal7</title>
                </Helmet>
             <IndexPage/>
              </>
            )}
          />
          {/* <Route path="/setup" component={setUpComponent} /> */}

          <Route path="/emailConfirmation" components={mailConfirm} />

          <Route path="/invitation-mail" components={InvitationMail} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
