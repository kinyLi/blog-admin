import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import MdEditor from 'react-markdown-editor-lite';
import HighLight from 'highlight.js';
import MarkdownIt from 'markdown-it';
import { Button, Input } from 'antd';
import Upload from '../upload/index';
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
    text: '',
    cover: '',
};

interface Data {
    html: string;
    text: string;
}

interface MdState {
    title: string;
    content: string;
    description?: string;
    text: string;
    cover: string;
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
            data: { ...formData, text: data.text, content: data.html },
        });
    };
    const handleInputTitle = (title: string): void => {
        setFormData({
            type: 'set',
            data: { ...formData, title },
        });
    };
    const handleInputDescription = (description: string): void => {
        setFormData({
            type: 'set',
            data: { ...formData, description },
        });
    };
    const dispatch = useDispatch();
    const handleSetArticle = (): void => {
        dispatch(
            setArticle({
                title: formData.title,
                content: formData.content,
                description: formData.description,
                cover: formData.cover,
            }),
        );
    };
    const setIsOk = formData.content !== '' && formData.title !== '' && formData.cover !== '';

    const uploadCover = (coverSrc: string) => {
        setFormData({
            type: 'set',
            data: { ...formData, cover: coverSrc },
        });
    };

    return (
        <div className="edit-content">
            <Upload uploadCallBack={uploadCover} />
            <div className="edit-content-tags">
                <Input
                    placeholder="请输入标题"
                    onChange={(event) => {
                        handleInputTitle(event.target.value);
                    }}
                    value={formData.title}
                    bordered={false}
                />
            </div>
            <Input
                placeholder="请输入描叙"
                onChange={(event) => {
                    handleInputDescription(event.target.value);
                }}
                value={formData.description}
                bordered={false}
            />
            <MdEditor
                id="my-md-editor"
                value={formData.text}
                style={{ height: '100%', width: '100%' }}
                renderHTML={(val) => mdParser.render(val)}
                onChange={handleEditorChange}
                config={mdConfig}
                placeholder="请输入内容"
            />
            <div className="set-button">
                <Button disabled={!setIsOk} onClick={handleSetArticle} size="small" type="primary">
                    发布
                </Button>
            </div>
        </div>
    );
};

export default MdEdit;
