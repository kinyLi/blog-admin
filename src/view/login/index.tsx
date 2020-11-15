import React from 'react';
import { Layout } from 'antd';
import './index.scss';

const { Header, Footer, Content } = Layout;

function Login() {
  return (
    <div className="login-view">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  )
}

export default Login;