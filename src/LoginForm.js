import { React, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from 'firebase/app';
import 'firebase/auth';

const uiConfig = {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    credentialHelper: 'none',
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
};

export function LoginForm() {
    let [isLoading, setLoading] = useState(true);
    let [user, setUser] = useState(undefined);

    useEffect(() => {
        const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                setLoading(false);
            } else {
                setUser(undefined);
                setLoading(false);
            }
        });
    
        return function cleanup() {
            authUnregisterFunction();
        }
    }, []);

    const handleLogOut = () => {
        firebase.auth().signOut();
    }

    if (isLoading) {
        return (<div className="login"><Spinner color="primary" /></div>);
    }

    if (user !== undefined) {
    return (
            <div className="login">
                <h1>Welcome!{" " + user.displayName}</h1>
                <button aria-label="button for sign out" onClick={handleLogOut}>Sign Out</button>
            </div>
        );
    } else {
        return (
            <div className="login">
                <h1>Sign Up or Log in!</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
}