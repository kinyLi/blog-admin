import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { AntdLayoutInterface } from 'utils/interface/antd';

import './index.scss';

const inputLayout: AntdLayoutInterface = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};

const tailLayout: AntdLayoutInterface = {
    wrapperCol: { offset: 8, span: 24 },
};

function FromWrapper(): JSX.Element {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-view-from-wrapper">
            <Form
                {...inputLayout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FromWrapper;
