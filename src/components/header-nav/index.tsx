import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Menu, Avatar } from 'antd';
import { HeaderNavPropsInterface } from './index.interface';

const HeaderNav = (props: HeaderNavPropsInterface) => {
    const { menuList = [], logo, defaultSelectedKeys = '1' } = props;
    return (
        <div className="view-header-nav">
            <div className="logo">{logo}</div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={[defaultSelectedKeys]}>
                {menuList.map((item) => {
                    return (
                        <Menu.Item key={item.navKey}>
                            <Link to={item.navLink}>{item.navName}</Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
            <div className="view-header-user">
                <Avatar>{logo}</Avatar>
            </div>
        </div>
    );
};

export default HeaderNav;
