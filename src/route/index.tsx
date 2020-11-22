import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin from '../view/admin';
import Login from '../view/login';
import Show from '../view/show';

const Routes = (): JSX.Element => {
    return (
        <Router>
            <Route path="/show" component={Show} />
            <Route path="/admin" component={Admin} exact />
            <Route path="/login" component={Login} exact />
        </Router>
    );
};

export default Routes;
