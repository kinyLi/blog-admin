import React from 'react';

import { Layout } from 'antd';
import FromWrapper from './components/from-wrapper';

import './index.scss';

const { Header, Footer, Content } = Layout;

function Login(): JSX.Element {
    return (
        <div className="login-view">
            <Layout>
                <Header>
                    <div className="login-view-header">KINY</div>
                </Header>
                <Content>
                    <FromWrapper />
                </Content>
                <Footer>
                    <span className="login-view-footer">kiny create</span>
                </Footer>
            </Layout>
        </div>
    );
}

export default Login;
