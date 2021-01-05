import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MdEditor from 'react-markdown-editor-lite';
import HighLight from 'highlight.js';
import MarkdownIt from 'markdown-it';
import { setArticle } from '../../actions/set-article';
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

interface SetArticleData {
    title: string;
    content: string;
    description: string;
}

const MdEdit = () => {
    const [text, setText] = useState('');
    const handleEditorChange = (data: Data): void => {
        setText(data.text);
    };
    const dispatch = useDispatch();
    const handleSetArticle = (): void => {
        dispatch(
            setArticle({
                title: '123',
                content: 'ajsjjsss',
            }),
        );
    };
    return (
        <div>
            <MdEditor
                value={text}
                style={{ height: '100%' }}
                renderHTML={(val) => mdParser.render(val)}
                onChange={handleEditorChange}
            />
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div className="set" onClick={handleSetArticle}>
                set
            </div>
        </div>
    );
};

export default MdEdit;
