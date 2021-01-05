import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import HighLight from 'highlight.js';

import 'react-markdown-editor-lite/lib/index.css';
import 'highlight.js/styles/a11y-light.css';

const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    langPrefix: 'language-',
    highlight(str, lang) {
        // highlight 高亮代码块
        if (lang && HighLight.getLanguage(lang)) {
            try {
                return HighLight.highlight(lang, str).value;
            } catch (err) {
                console.log(err);
            }
        }

        return ''; // 使用额外的默认转义
    },
});

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
