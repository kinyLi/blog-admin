import React, { useEffect, useState } from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { getCacheImageList } from 'actions';

interface Store {
    cacheImageList: {
        list: string[];
    };
}

const props = {
    name: 'file',
    action: 'http://10.9.12.40:5000/life/cache',
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
    data: {
        username: 'kiny',
    },
};

const AdminContent = () => {
    // const [] = useState(false);
    const dispatch = useDispatch();
    const cacheImageList = useSelector((state: Store) => state.cacheImageList);
    const { list = [] } = cacheImageList;
    useEffect(() => {
        dispatch(getCacheImageList('kiny'));
    }, []);

    return (
        <div>
            {/* <Upload */}
            {/*    action="https://www.mocky.io/v2/5cc8019d300000980a055e76" */}
            {/*    listType="picture-card" */}
            {/*    fileList={fileList} */}
            {/*    // onPreview={this.handlePreview} */}
            {/*    // onChange={this.handleChange} */}
            {/* > */}
            {/*    {fileList.length >= 8 ? null : uploadButton} */}
            {/* </Upload> */}
            {/* <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={this.handleCancel}> */}
            {/*    <img alt="example" style={{ width: '100%' }} src={previewImage} /> */}
            {/* </Modal> */}
        </div>
    );
};

export default AdminContent;
