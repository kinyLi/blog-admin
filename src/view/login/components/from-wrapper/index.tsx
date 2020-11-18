import React, { useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { AntdLayoutInterface } from 'utils/interface/antd';
import RegisterModal from '../register-modal';

import './index.scss';

const inputLayout: AntdLayoutInterface = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};

const tailLayout: AntdLayoutInterface = {
    wrapperCol: { offset: 0, span: 24 },
};

const buttonLayout: AntdLayoutInterface = {
    wrapperCol: { offset: 8, span: 24 },
};

function FromWrapper(): JSX.Element {
    const [isShowRegister, setIsShowRegister] = useState(false);

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const changeIsShowRegister = (): void => {
        setIsShowRegister(!isShowRegister);
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

                <Form.Item {...buttonLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <button type="button" onClick={changeIsShowRegister} className="register-modal-open">
                还没有账号?快速注册
            </button>
            <RegisterModal changeIsShowRegister={changeIsShowRegister} visible={isShowRegister} />
        </div>
    );
}

export default FromWrapper;
