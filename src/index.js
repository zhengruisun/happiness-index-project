import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app'

import './css/main-style.css';
var firebaseConfig = {
    apiKey: "AIzaSyAKoCg88TZcBL4Rfl_7pDhE8pn_DfQhHEQ",
    authDomain: "project-2-zhanz1-6dbd8.firebaseapp.com",
    projectId: "project-2-zhanz1-6dbd8",
    storageBucket: "project-2-zhanz1-6dbd8.appspot.com",
    messagingSenderId: "433935427896",
    appId: "1:433935427896:web:dc93ecee6cd918f57639cd",
    measurementId: "G-JDB4WJ7K3N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));