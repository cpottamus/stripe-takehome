import React from "react";
import { Router, Switch, Route } from "react-router-dom";



import Shipping from "./components/Shipping";
import Checkout from "./components/Checkout";
import { HomePage } from "./HomePage";
import history from './history';

export default function Routes(props) {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={(props) => <HomePage /> }/>
                    <Route path="/shipping" component={Shipping} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </Router>
        )
}