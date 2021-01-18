import React, { useEffect } from 'react';
import './index.scss';
import { Card, Row, Col, Image } from 'antd';
import { getArticle } from 'actions';
import { useDispatch } from 'react-redux';

const ArticleList = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticle({ limit: 10, page: 1 }));
    }, []);

    return (
        <div className="show-view__article-list">
            <div className="show-view__article-list-item">
                <div className="show-view__article-list-item-image">
                    <Image
                        width="100%"
                        height="100%"
                        src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg"
                    />
                </div>

                <div className="show-view__article-list-item-info">
                    <div className="show-view__article-list-item-title">hello word</div>
                    <div className="show-view__article-list-item-date">2020-10-01</div>
                    <div className="show-view__article-list-item-describe">
                        asdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasa
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleList;
