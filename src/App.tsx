import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { background1 } from 'utils/images/index';
import Admin from './view/admin';
import Login from './view/login';

import './App.scss';

function App(): JSX.Element {
    return (
        <div className="App" style={{ backgroundImage: `url(${background1})` }}>
            <Router>
                <Route path="/" component={Admin} exact />
                <Route path="/login" component={Login} />
            </Router>
        </div>
    );
}

export default App;
