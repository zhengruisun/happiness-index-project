import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import { IndexTablePage } from './IndexTablePage';
//import { IndexCardsPage } from './IndexCardsPage';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
import { Collapse, NavbarToggler, UncontrolledDropdown, DropdownMenu, DropdownItem, Navbar, DropdownToggle, Nav } from 'reactstrap';


export function App(props) {
    // const
    return (
        <div>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/landing" component={LandingPage} />
                    <Route exact path="/table" component={IndexTablePage} />
                    {/* {<Route exact path="/cards" component={IndexCardsPage} />} */}
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

function NavBar(props) {

    return (
        <section>
            <nav className="fixed-top">
                <div className="nav-left">
                    <span className="logo" aria-hidden="true">&nbsp;</span><a className="hide-mobile">World Happiness</a>
                    <NavLink className="nav-text" exact to="/">Home</NavLink>
                    <NavLink className="nav-text" to="/cards">DataCards</NavLink>
                    <NavLink className="nav-text" to="/table">DataTable</NavLink>
                </div>
                <div className="nav-right">
                    <a href="index.html" role="button"><button aria-label="button for sign up"><span>Sign
                                Up</span></button></a>
                    <a href="index.html" role="button"><button aria-label="button for log in"><span>Log
                            In</span></button></a>
                </div>
            </nav>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <p>
                &copy; 2021 University of Washington All rights reserved. Contact with 
                <a href="mailto:zhanz1@uw.edu" role="link" aria-label="Zhan's email"> Zhan</a>,
                <a href="mailto:qiaoyi@uw.edu" role="link" aria-label="Whitney's email"> Whitney</a>,
                <a href="mailto:zsun0510@uw.edu" role="link" aria-label="Jerry's email"> Jerry</a>
            </p>
        </footer>
    );
}

export default App;