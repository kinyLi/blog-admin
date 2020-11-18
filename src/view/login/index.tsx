import React from 'react';

import { Layout } from 'antd';
import HeaderNav from 'components/header-nav';
import FromWrapper from './components/from-wrapper';

import './index.scss';

const { Header, Footer, Content } = Layout;

function Login(): JSX.Element {
    return (
        <div className="login-view">
            <Layout>
                <Content>
                    <FromWrapper />
                </Content>
            </Layout>
        </div>
    );
}

export default Login;
