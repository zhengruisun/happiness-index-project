import React from 'react';
import { LandingPage } from './LandingPage';
import { IndexTablePage } from './IndexTablePage';
import { IndexCardPage } from './IndexCardPage';
import { Route, Switch } from 'react-router-dom';
import { NavBar, Footer } from './Feature';

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

export default App;