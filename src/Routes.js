import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";



import Shipping from "./components/Shipping";
import { HomePage } from "./index";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/shipping" component={Shipping} />
                </Switch>
            </Router>
        )
    }
}