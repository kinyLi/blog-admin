import React from 'react';
import './index.scss';
import { Typography, Popover } from 'antd';
import { GithubFilled, WechatFilled } from '@ant-design/icons';

const { Title, Paragraph, Link } = Typography;

const Info = (): JSX.Element => {
    const showWechat = <div>wechat</div>;

    return (
        <div className="show-view__info">
            <Title>Hello word</Title>
            <div className="show-view__info_contact-information">
                <Link href="https://github.com/lijinyi971221">
                    <GithubFilled style={{ fontSize: '2em', color: '#000' }} />
                </Link>
                <Popover title="扫码关注" content={showWechat} trigger="hover">
                    <WechatFilled style={{ fontSize: '2em', color: '#000' }} />
                </Popover>
            </div>
            <Paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties and
                duplication and reduce the efficiency of development.
            </Paragraph>
        </div>
    );
};

export default Info;
