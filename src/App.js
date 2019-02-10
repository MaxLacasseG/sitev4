import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.scss";

import Home from "./components/Home";
import Game from "./components/Game";
import Web from "./components/Web";
import Contact from "./components/Contact";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/web" exact component={Web} />
                    <Route path="/jeux-videos" exact component={Game} />
                    <Route path="/contact" exact component={Contact} />
                </div>
            </Router>
        );
    }
}

export default App;
