import React from 'react';

import { Layout } from 'antd';
import HeaderNav from 'components/header-nav';
import AdminContent from './components/admin-content';
import { MENU_LIST, LOGO, DEFAULT_SELECTED_KEYS } from './constant';

import './index.scss';

const { Header, Content } = Layout;

function Admin(): JSX.Element {
    return (
        <div className="admin-view">
            <Layout>
                <Header>
                    <HeaderNav menuList={MENU_LIST} logo={LOGO} defaultSelectedKeys={DEFAULT_SELECTED_KEYS} />
                </Header>
                <Content>
                    <AdminContent />
                </Content>
            </Layout>
        </div>
    );
}
export default Admin;
