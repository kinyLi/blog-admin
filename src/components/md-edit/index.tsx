import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);

interface Data {
    html: string;
    text: string;
}

const MdEdit = () => {
    const [text, setText] = useState('');
    const handleEditorChange = (data: Data): void => {
        setText(data.text);
    };
    return (
        <MdEditor
            value={text}
            style={{ height: '500px' }}
            renderHTML={(val) => mdParser.render(val)}
            onChange={handleEditorChange}
        />
    );
};

export default MdEdit;
