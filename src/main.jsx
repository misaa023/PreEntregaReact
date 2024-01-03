import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDeD8H382ibuR7c4qnY95wVIlpJmgipzSc',
    authDomain: 'venta-de-bebidas-13ed4.firebaseapp.com',
    projectId: 'venta-de-bebidas-13ed4',
    storageBucket: 'venta-de-bebidas-13ed4.appspot.com',
    messagingSenderId: '886958537885',
    appId: '1:886958537885:web:5898368d44ba7082032874',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
