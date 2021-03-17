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

export function LoginForm(props) {
    let [isLoading, setLoading] = useState(true);
    let [user, setUser] = useState(undefined);
    let [dbLoading, setdbLoading] = useState(true);
    let [userCountry, setUserCountry] = useState('');
    let [userPost, setUserPost] = useState('');
    
    const handleCountryChange = (evt) => {
        setUserCountry(evt.target.value)
    }

    const handleCountrySubmit = (evt) => {
        evt.preventDefault();
        const message = firebase.database().ref('users').child(user.uid);
        message.set(userCountry);
    }

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


    useEffect(() => {
        if (user) {
            const message = firebase.database().ref('users').child(user.uid);
            message.on('value', (snapshot) => {
                setUserCountry(snapshot.val());
                setdbLoading(false);
                props.callbackFunc(snapshot.val());
            });
        }
    }, [user]);

    const handleLogOut = () => {
        firebase.auth().signOut();
        props.callbackFunc(undefined);
    }

    if (isLoading) {
        return (<div className="login"><Spinner color="primary" /></div>);
    }

    let countryContent = (<Spinner color="primary" />);

    if (userCountry !== null && userCountry !== '' && !dbLoading) {
        countryContent = (<p>You've selected {userCountry}</p>);
    } else if ((userCountry === null || userCountry === '') && !dbLoading) {
        countryContent = (<p>Please select and submit your country.</p>);
    }

    if (user !== undefined) {
    return (
            <div className="login">
                <h1>Welcome!{" " + user.displayName}</h1>
                {countryContent}
                <form className="text-input" onSubmit={handleCountrySubmit} role="textbox" aria-label="textbox for selecting country for the table">
                    <label htmlFor="country-for-table">
                        <h3>Country:</h3>
                    </label>
                    <input type="text" className="country-select"
                        placeholder="Type in a country name" aria-label="country name input" 
                        value={userCountry || ''} onChange={handleCountryChange} />
                <br/>
                <button type="submit" className="submit-button">Submit</button>
                </form>
                <br/>
                <button aria-label="button for sign out" className="submit-button" onClick={handleLogOut}>Sign Out</button>
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

