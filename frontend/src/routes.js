import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mail from './components/main/invitationMail';
import confirmMail from './components/main/emails/mailConfirmation'

export default function routes(){
    return(
    <Switch>
        <Route path="/invitation-mail" component={Mail}/>
        <Route path="/emailConfirmation"  component={confirmMail} />
    </Switch>
    )
};