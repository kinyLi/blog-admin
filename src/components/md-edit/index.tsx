import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MdEditor from 'react-markdown-editor-lite';
import HighLight from 'highlight.js';
import MarkdownIt from 'markdown-it';
import { setArticle } from '../../actions/set-article';
import 'react-markdown-editor-lite/lib/index.css';
import 'highlight.js/styles/a11y-light.css';
import './index.scss';

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

const mdConfig = {
    view: {
        menu: false,
    },
    shortcuts: true,
    syncScrollMode: true,
};

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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleEditorChange = (data: Data): void => {
        setText(data.text);
    };
    const handleInputTitle = (titleVal: string): void => {
        setTitle(titleVal);
    };
    const handleInputDescription = (descriptionVal: string): void => {
        setDescription(descriptionVal);
    };
    const dispatch = useDispatch();
    const handleSetArticle = (): void => {
        dispatch(
            setArticle({
                title,
                content: text,
                description,
            }),
        );
    };
    return (
        <div className="edit-content">
            <input
                onChange={(e) => {
                    handleInputTitle(e.target.value);
                }}
                value={title}
                className="edit-title-input title"
                type="text"
                placeholder="请输入标题"
            />
            <input
                onChange={(e) => {
                    handleInputDescription(e.target.value);
                }}
                value={description}
                className="edit-title-input description"
                type="text"
                placeholder="请输入描叙"
            />
            <MdEditor
                id="my-md-editor"
                value={text}
                style={{ height: '100%', width: '100%' }}
                renderHTML={(val) => mdParser.render(val)}
                onChange={handleEditorChange}
                config={mdConfig}
                placeholder="请输入内容"
            />
            <div className="edit-set-button" onClick={handleSetArticle}>
                发布
            </div>
        </div>
    );
};

export default MdEdit;
