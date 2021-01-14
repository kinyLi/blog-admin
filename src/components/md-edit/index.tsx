import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import MdEditor from 'react-markdown-editor-lite';
import HighLight from 'highlight.js';
import MarkdownIt from 'markdown-it';
import { Button } from 'antd';
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

const mdInitState: MdState = {
    title: '',
    content: '',
    description: '',
};

interface Data {
    html: string;
    text: string;
}

interface MdState {
    title: string;
    content: string;
    description?: string;
}

interface MdAction {
    type: string;
    data: MdState;
}

const MdEdit = () => {
    const mdReducer = (state: MdState, action: MdAction) => {
        switch (action.type) {
            case 'set':
                return { ...state, ...action.data };
            default:
                return { ...state };
        }
    };

    const [formData, setFormData] = useReducer(mdReducer, mdInitState);

    const handleEditorChange = (data: Data): void => {
        setFormData({
            type: 'set',
            data: { ...formData, content: data.text },
        });
    };
    const handleInputTitle = (titleVal: string): void => {
        setFormData({
            type: 'set',
            data: { ...formData, title: titleVal },
        });
    };
    const handleInputDescription = (descriptionVal: string): void => {
        setFormData({
            type: 'set',
            data: { ...formData, description: descriptionVal },
        });
    };
    const dispatch = useDispatch();
    const handleSetArticle = (): void => {
        dispatch(setArticle(formData));
    };
    return (
        <div className="edit-content">
            <input
                onChange={(e) => {
                    handleInputTitle(e.target.value);
                }}
                value={formData.title}
                className="edit-title-input title"
                type="text"
                placeholder="请输入标题"
            />
            <input
                onChange={(e) => {
                    handleInputDescription(e.target.value);
                }}
                value={formData.description}
                className="edit-title-input description"
                type="text"
                placeholder="请输入描叙"
            />
            <MdEditor
                id="my-md-editor"
                value={formData.content}
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
