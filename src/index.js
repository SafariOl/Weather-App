import ReactDOMClient from 'react-dom/client';
import React from 'react';
import App from './App';
import './style.css';
import { store } from './store';
import { Provider } from 'react-redux';
export const API_KEY = 'a43370d07c332057a138f54300a5a38a'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
