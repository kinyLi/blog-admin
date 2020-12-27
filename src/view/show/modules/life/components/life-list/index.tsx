import React from 'react';
import './index.scss';
import { Card, Row, Col, Image } from 'antd';

const LifeList = (): JSX.Element => {
    return (
        <div className="show-view__life-list">
            <div className="show-view__life-list-item">
                <Row>
                    <Col span={6}>
                        <Image
                            width="100%"
                            height="100%"
                            src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg"
                        />
                    </Col>
                    <Col span={18}>
                        <div className="show-view__life-list-item-info">
                            <div className="show-view__life-list-item-title">hello word</div>
                            <div className="show-view__life-list-item-date">2020-10-01</div>
                            <div className="show-view__life-list-item-describe">
                                asdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasaasdadadaddddddsdasa
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LifeList;
