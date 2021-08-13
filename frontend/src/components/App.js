import React, { Component } from 'react';
import { render } from 'react-dom';
import Test from './Test';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                It's everything fine!
                <Test />
            </div>
        )
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);