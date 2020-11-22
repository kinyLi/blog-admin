import React from 'react';

import { Layout } from 'antd';
import HeaderNav from 'components/header-nav';
import { Route } from 'react-router-dom';
import { MENU_LIST, LOGO, DEFAULT_SELECTED_KEYS } from './constant';
import { info, life, article } from './modules';
import './index.scss';

const { Header, Content } = Layout;

function Show(): JSX.Element {
    return (
        <div className="show-view">
            <Layout>
                <Header>
                    <HeaderNav menuList={MENU_LIST} logo={LOGO} defaultSelectedKeys={DEFAULT_SELECTED_KEYS} />
                </Header>
                <Content>
                    <Route path="/show/info" component={info} />
                    <Route path="/show/life" component={life} />
                    <Route path="/show/article" component={article} />
                </Content>
            </Layout>
        </div>
    );
}
export default Show;
