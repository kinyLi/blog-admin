import React from 'react';

import { Layout } from 'antd';
import HeaderNav from './components/header-nav';
import AdminContent from './components/admin-content';

const { Header, Content } = Layout;

function Admin(): JSX.Element {
    return (
        <div className="admin-view">
            <Header>
                <HeaderNav />
            </Header>
            <Content>
                <AdminContent />
            </Content>
        </div>
    );
}
export default Admin;
