import React, { Component } from 'react';
import { render } from 'react-dom';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>It's everything fine!</div>
        )
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);