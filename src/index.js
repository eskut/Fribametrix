import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
    apiKey: "AIzaSyB1zSzOE2dsRv8rAZEJIxg_nFfLBNuy6Ek",
    authDomain: "fribametrix.firebaseapp.com",
    projectId: "fribametrix",
    storageBucket: "fribametrix.appspot.com",
    messagingSenderId: "705155271554",
    appId: "1:705155271554:web:57fc4ca8beafa56928dd9b",
    measurementId: "G-LXNTRXNBH4"
  };

ReactDOM.render(
    <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>  
        <App />
      </FirebaseAppProvider>  
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
