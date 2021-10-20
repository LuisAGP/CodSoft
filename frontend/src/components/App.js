import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Home from './Home';
import Login from './Login';
import PublicRoute from './routes/PublicRoute';
import { GeneralContextProvideer } from './context/GeneralProvideer';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GeneralContextProvideer >
                <Router>

                    <Switch>
                        
                        <PublicRoute component={Login} path="/login" exact />
                        <PrivateRoute component={Home} path="/" exact />

                    </Switch>

                </Router>
            </GeneralContextProvideer>
        )
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);