import React from 'react';
import './index.scss';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
    name: 'file',
    action: 'http://localhost:5000/Setting/setting',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const AdminContent = () => {
    return (
        <div>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </div>
    );
};

export default AdminContent;
