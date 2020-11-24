import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store';

import App from './App';

import 'antd/dist/antd.min.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
