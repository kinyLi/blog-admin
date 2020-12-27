import React from 'react';

import { Row, Col } from 'antd';
import HeaderNav from 'components/header-nav';
import { Route } from 'react-router-dom';
import { MENU_LIST, LOGO, DEFAULT_SELECTED_KEYS } from './constant';
import { Info, Life, Article } from './modules';
import './index.scss';

function Show(): JSX.Element {
    return (
        <div className="show-view">
            <div className="header">
                <Row>
                    <Col span={16}>
                        <div className="content-header" />
                    </Col>
                    <Col span={8}>
                        <HeaderNav menuList={MENU_LIST} logo={LOGO} defaultSelectedKeys={DEFAULT_SELECTED_KEYS} />
                    </Col>
                </Row>
            </div>
            <div className="content">
                <Route path="/show/info" component={Info} />
                <Route path="/show/life" component={Life} />
                <Route path="/show/article" component={Article} />
            </div>
        </div>
    );
}
export default Show;
