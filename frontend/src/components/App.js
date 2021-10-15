import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Home from './Home';
import Login from './Login';
import PublicRoute from './routes/PublicRoute';
import { ShowMessageProvideer } from './context/MessageProvideer';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ShowMessageProvideer >
                <Router>

                    <Switch>
                        
                        <PublicRoute component={Login} path="/login" exact />
                        <PrivateRoute component={Home} path="/" exact />

                    </Switch>

                </Router>
            </ShowMessageProvideer>
        )
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);