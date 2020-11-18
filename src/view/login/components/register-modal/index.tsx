import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { AntdLayoutInterface } from 'utils/interface/antd';
import { RegisterModalPropsInterface } from './index.interface';

import './index.scss';

const inputLayout: AntdLayoutInterface = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};

const RegisterModal = (props: RegisterModalPropsInterface) => {
    const [loading, setLoading] = useState(false);
    const { visible, changeIsShowRegister } = props;

    const changeLodingState = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <div className="register-modal-view">
            <Modal
                visible={visible}
                keyboard
                onCancel={changeIsShowRegister}
                footer={[
                    <Button key="close" onClick={changeIsShowRegister}>
                        返回
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={changeLodingState}>
                        注册
                    </Button>,
                ]}
            >
                <div className="register-modal-form">
                    <Form {...inputLayout}>
                        <Form.Item
                            label="username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="repeatPassword"
                            name="repeatPassword"
                            rules={[{ required: true, message: 'Please input your repeatPassword!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default RegisterModal;
