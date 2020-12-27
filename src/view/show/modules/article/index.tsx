import React from 'react';
import './index.scss';
import { Row, Col } from 'antd';
import ArticleList from './components/article-list/index';

const Article = (): JSX.Element => {
    return (
        <div className="show-view__Article">
            <Row>
                <Col span={16}>article</Col>
                <Col span={8}>
                    <ArticleList />
                </Col>
            </Row>
        </div>
    );
};

export default Article;
