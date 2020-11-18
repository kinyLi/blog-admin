import React from 'react';

import { Layout } from 'antd';
import FromWrapper from './components/from-wrapper';

import './index.scss';

const { Content } = Layout;

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
