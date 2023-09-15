import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import PWAPrompt from 'react-ios-pwa-prompt'
import { FirebaseContext } from './store/firebaseContext'; 
import firebase from './componats/firebase/config';
import ProductDataFctn from './store/firebaseContext';
import {ItemsListFctn } from './store/firebaseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ItemsListFctn>
    <ProductDataFctn>
    <FirebaseContext.Provider value={{firebase}}>
    <App  /><PWAPrompt copyTitle={'are you want to download the app '} />
    </FirebaseContext.Provider>
    </ProductDataFctn>
    </ItemsListFctn>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
