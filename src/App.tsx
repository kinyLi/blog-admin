import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { background1 } from 'utils/images/index';
import Admin from './view/admin';
import Login from './view/login';

import './App.scss';
import { getInfo } from './actions/infos';

interface ReduxState {
    getInfo: {
        url: string;
    };
}

function App(): JSX.Element {
    const dispatch = useDispatch();
    const info = useSelector((state: ReduxState) => state.getInfo);
    useEffect(() => {
        dispatch(getInfo());
    }, []);
    return (
        // style={{ backgroundImage: `url(${background1})` }}
        <div className="App">
            <div>{info.url}</div>
            <Router>
                <Route path="/" component={Admin} exact />
                <Route path="/login" component={Login} />
            </Router>
        </div>
    );
}

export default App;
