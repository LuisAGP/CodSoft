import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import '../../static/css/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';

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

                        <Route path="/example" >
                            <div>Done!</div>
                        </Route>

                    </Switch>
                </div>
            </Router>
        )
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);