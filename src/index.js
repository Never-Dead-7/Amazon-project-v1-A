import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Stateprovider } from './Stateprovider';
import { initialState, reducer } from './reducer.js'


ReactDOM.render(
    <Stateprovider initialState={initialState} reducer={reducer}>
        <App />
    </Stateprovider>,
    document.getElementById('root'));
reportWebVitals();
