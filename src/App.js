import React from 'react';
import { LandingPage } from './LandingPage';
import { IndexTablePage } from './IndexTablePage';
import { IndexCardPage } from './IndexCardPage';
import { Route, Switch, NavLink } from 'react-router-dom';


export function App() {
    return (
        <div>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/landing" component={LandingPage} />
                    <Route exact path="/table" component={IndexTablePage} />
                    <Route exact path='/cards' component={IndexCardPage} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

function NavBar() {
    return (
        <section>
            <nav className="fixed-top">
                <div className="nav-left">
                    <span className="logo" aria-hidden="true">&nbsp;</span><b className="hide-mobile">World Happiness</b>
                    <NavLink className="nav-text" exact to="/">Home</NavLink>
                    <NavLink className="nav-text" to="/cards">DataCards</NavLink>
                    <NavLink className="nav-text" to="/table">DataTable</NavLink>
                </div>
                <div className="nav-right">
                    <NavLink className="hide-small" to='/'><button aria-label="button for sign up"><span>Sign Up</span></button></NavLink>
                    <NavLink to='/'><button aria-label="button for log in"><span>Log In</span></button></NavLink>
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
                <a href="mailto:zhanz1@uw.edu" aria-label="Zhan's email"> Zhan</a>,
                <a href="mailto:qiaoyi@uw.edu" aria-label="Whitney's email"> Whitney</a>,
                <a href="mailto:zsun0510@uw.edu" aria-label="Jerry's email"> Jerry</a>
            </p>
        </footer>
    );
}

export default App;