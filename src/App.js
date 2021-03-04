import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import { IndexTablePage } from './IndexTablePage';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

export function App(pros) {
    // const
    return (
        <div>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path="/landing" component={LandingPage} />
                    <Route exact path="/table" component={IndexTablePage} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

function NavBar() {
    return (
        <section>

        </section>
    );
}

function Footer() {
    return (
        <footer>
            <p>
                &copy; 2021 University of Washington All rights reserved. Contact with
                <a href="mailto:zhanz1@uw.edu" role="link" aria-label="Zhan's email">Zhan</a>,
                <a href="mailto:qiaoyi@uw.edu" role="link" aria-label="Whitney's email">Whitney</a>,
                <a href="mailto:zsun0510@uw.edu" role="link" aria-label="Jerry's email">Jerry</a>
            </p>
        </footer>
    );
}