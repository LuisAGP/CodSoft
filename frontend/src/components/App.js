import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import '../../static/css/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import ModalMaker from './tools/ModalMaker';

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

                        <Route path="/modalmaker" >
                            <ModalMaker />
                        </Route>

                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);