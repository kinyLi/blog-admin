import React, { useEffect, useState } from 'react';
import './index.scss';
import QuillDom from 'components/quill-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { message } from 'antd';
// import { getCacheImageList } from 'actions';

// interface Store {
//     cacheImageList: {
//         list: string[];
//     };
// }

// const props = {
//     name: 'file',
//     action: 'http://10.9.12.40:5000/life/cache',
//     headers: {
//         authorization: 'authorization-text',
//     },
//     onChange(info: any) {
//         if (info.file.status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (info.file.status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully`);
//         } else if (info.file.status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
//     data: {
//         username: 'kiny',
//     },
// };

const AdminContent = () => {
    const [text, changeText] = useState('');
    // const [] = useState(false);
    // const dispatch = useDispatch();
    // const cacheImageList = useSelector((state: Store) => state.cacheImageList);
    // const { list = [] } = cacheImageList;
    // useEffect(() => {
    // dispatch(getCacheImageList('kiny'));
    // }, []);

    return (
        <div id="prosemirror">
            <QuillDom />
        </div>
    );
};

export default AdminContent;
