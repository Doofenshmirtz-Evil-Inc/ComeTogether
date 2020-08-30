import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//import About from "./About/About";
//import Contact from "./Contact/Contact";
//import Products from "./Product/Products";
import Home from "./App";
import Page from "./Page"
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Page" component={Page} />
                </Switch>
            </Router>
        )
    }
}