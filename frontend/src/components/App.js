import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import '../../static/css/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Switch>

                        <Route path="/" exact>
                            <Home />
                        </Route>

                        <Route path="/login">
                            <Login />
                        </Route>

                    </Switch>

                </div>
            </Router>
        )
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);