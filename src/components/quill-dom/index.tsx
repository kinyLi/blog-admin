import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { modules } from './constant';

const QuillDom = () => {
    const [value, setValue] = useState('');
    const changeValue = (v: string) => {
        setValue(v);
    };
    return <ReactQuill modules={modules} theme="bubble" value={value} onChange={changeValue} />;
};

export default QuillDom;
