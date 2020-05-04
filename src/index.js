import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './stores';
import { BrowserRouter as Router } from "react-router-dom";
import history  from "./components/history";
import { Provider } from 'react-redux';
ReactDOM.render(
<Provider store={ store }>    
<Router forceRefresh={true} history={history}>
    <App /> 
    </Router>
</Provider>,document.getElementById('root'));

