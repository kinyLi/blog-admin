import React from 'react';
import './index.scss';
import { Row, Col } from 'antd';
import LifeList from './components/life-list/index';

const Life = (): JSX.Element => {
    return (
        <div className="show-view__life">
            <Row>
                <Col span={16} />
                <Col span={8}>
                    <LifeList />
                </Col>
            </Row>
        </div>
    );
};

export default Life;
