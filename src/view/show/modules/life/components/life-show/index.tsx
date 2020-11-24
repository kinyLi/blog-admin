import React, { CSSProperties } from 'react';
import { Card, Image } from 'antd';
import './index.scss';

const LifeShow = (): JSX.Element => {
    const gridStyle: CSSProperties = {
        width: '33.3%',
        textAlign: 'center',
    };

    const imageList = [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606062045585&di=a22bc5aa00fc411d04a64aa1eeb972d1&imgtype=0&src=http%3A%2F%2F09.imgmini.eastday.com%2Fmobile%2F20180808%2F20180808134821_d41d8cd98f00b204e9800998ecf8427e_6.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606062066918&di=a01b5853f9e980512218eeef5503018d&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2Fd8dba125gw1e77h3sjt0nj20rs0v9wh8.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2753374492,2943156836&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606062045585&di=a22bc5aa00fc411d04a64aa1eeb972d1&imgtype=0&src=http%3A%2F%2F09.imgmini.eastday.com%2Fmobile%2F20180808%2F20180808134821_d41d8cd98f00b204e9800998ecf8427e_6.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606062066918&di=a01b5853f9e980512218eeef5503018d&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2Fd8dba125gw1e77h3sjt0nj20rs0v9wh8.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2753374492,2943156836&fm=26&gp=0.jpg',
    ];
    return (
        <div className="life-show-wrapper">
            <div className="life-show-item">
                <div className="life-show-item-text">
                    <div className="header">
                        <span className="title">生活区</span>
                        <span className="date">2020-9-1</span>
                    </div>
                    <div className="content">生活与狗</div>
                </div>
                <div className="life-show-item-image-wrapper">
                    {imageList.map((item) => {
                        return <Image key={item} width="100%" height="100%" src={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default LifeShow;
