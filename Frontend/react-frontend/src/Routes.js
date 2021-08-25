import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Config from './pages/Config';
import List from './pages/List';

export default () => {
    return (
        <Switch>
            <Route exact path = "/">
                <Home></Home>
            </Route>
            <Route exact path = "/login">
                Página de Login
            </Route>
            <Route exact path = "/list">
                <List></List>
            </Route>
            <Route exact path = "/completo">
                Feedback Completo
            </Route>
            <Route exact path = "/config">
                <Config></Config>
            </Route>
        </Switch>
    )

}