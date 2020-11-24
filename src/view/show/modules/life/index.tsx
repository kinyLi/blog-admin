import React from 'react';
import LifeShow from './components/life-show/index';
import './index.scss';

const life = (): JSX.Element => {
    return (
        <div className="show-view__life">
            <LifeShow />
        </div>
    );
};

export default life;
