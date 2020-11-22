import React from 'react';
import Routes from './route/index';

// import { useDispatch, useSelector } from 'react-redux';
// import { background1 } from 'utils/images/index';

import './App.scss';
// import { getInfo } from './actions/infos';

function App(): JSX.Element {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getInfo());
    // }, []);
    return (
        // style={{ backgroundImage: `url(${background1})` }}
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
