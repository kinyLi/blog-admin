import React from 'react';
import { Modal, Button } from 'antd';
import { RegisterModalPropsInterface } from './index.interface';

const RegisterModal = (props: RegisterModalPropsInterface) => {
    const { visible, changeIsShowRegister } = props;

    return (
        <div className="register-modal-view">
            <Modal visible={visible} onCancel={changeIsShowRegister}>
                register
            </Modal>
        </div>
    );
};

export default RegisterModal;
