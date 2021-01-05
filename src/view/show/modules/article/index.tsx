import React from 'react';
import './index.scss';
import { Row, Col } from 'antd';
import MarkdownIt from 'markdown-it';
import HighLight from 'highlight.js';
import ArticleList from './components/article-list/index';

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

const Article = (): JSX.Element => {
    const renderMd = (text: string) => {
        return mdParser.render(text);
    };

    return (
        <div className="show-view__Article">
            <Row>
                <Col span={16}>
                    <div dangerouslySetInnerHTML={{ __html: renderMd('# 111') }} />
                </Col>
                <Col span={8}>
                    <ArticleList />
                </Col>
            </Row>
        </div>
    );
};

export default Article;
