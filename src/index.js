import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrioVF5L9ddL78fGb50gD4gIV259OEagY",
  authDomain: "netflix-clone-api-2022.firebaseapp.com",
  projectId: "netflix-clone-api-2022",
  storageBucket: "netflix-clone-api-2022.appspot.com",
  messagingSenderId: "1010106775297",
  appId: "1:1010106775297:web:e482088599a7a4e160cd00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
