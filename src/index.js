import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

export const API_URL = "http://127.0.0.1:8000/api/students/"
export const API_STATIC_MEDIA = "http://127.0.0.1:8000/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
