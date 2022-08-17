import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Appwrapper from './components/appwrapper';

const firebaseConfig = {
    apiKey: "AIzaSyB1zSzOE2dsRv8rAZEJIxg_nFfLBNuy6Ek",
    authDomain: "fribametrix.firebaseapp.com",
    projectId: "fribametrix",
    storageBucket: "fribametrix.appspot.com",
    messagingSenderId: "705155271554",
    appId: "1:705155271554:web:57fc4ca8beafa56928dd9b",
    measurementId: "G-LXNTRXNBH4"
  };

const root = document.getElementById("root");
   ReactDOM.render(
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>  
        <Appwrapper />
      </FirebaseAppProvider>,
      root    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
