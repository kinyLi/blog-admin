import React, { useState } from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import { UploadChangeParam } from 'antd/es/upload';
import { UploadFile } from 'antd/es/upload/interface';

interface UploadProps {
    uploadCallBack?: (src: string) => void | undefined;
}

const UploadWrap = (props: UploadProps) => {
    const { uploadCallBack } = props;
    const [fileSrc, setFileSrc] = useState<string | undefined>('');
    const uploadButton = (
        <div className="upload-card">
            <PlusOutlined style={{ height: '100%' }} />
            <div className="upload-text">Upload</div>
        </div>
    );
    const handleChangeFile = (file: UploadChangeParam) => {
        const fileImage = file.fileList[0] || {};
        const { response = {} } = fileImage;
        const { src = '' } = response;
        setFileSrc(src);
        uploadCallBack && uploadCallBack(src);
    };

    return (
        <div className="upload-wrap">
            <Upload
                action="http://localhost:4399/setImage"
                listType="picture-card"
                onChange={(file) => {
                    handleChangeFile(file);
                }}
            >
                {!fileSrc && uploadButton}
            </Upload>
        </div>
    );
};

export default UploadWrap;
