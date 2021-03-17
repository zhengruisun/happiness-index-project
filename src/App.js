import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LandingPage } from './LandingPage';
import { IndexTablePage } from './IndexTablePage';
import { IndexCardPage } from './IndexCardPage';
import { NavBar, Footer } from './Feature';
import { LoginForm } from './LoginForm';

export function App() {
    let [user, setUser] = useState('');

    return (
        <div>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/landing" component={LandingPage} />
                    <Route exact path="/table" component={IndexTablePage} />
                    <Route exact path="/cards" component={IndexCardPage} />
                    <Route exact path="/login" component={() => { return <LoginForm hasUser={user} setUser={setUser} />; }} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;