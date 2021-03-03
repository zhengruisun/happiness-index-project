import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

function App(pros) {
    // const
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/landing" component={LandingPage} />
            </Switch>
        </div>
    );
}