import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Menu, Avatar } from 'antd';
import { HeaderNavPropsInterface } from './index.interface';

const HeaderNav = (props: HeaderNavPropsInterface) => {
    const { menuList = [], logo, defaultSelectedKeys = '1' } = props;
    return (
        <div className="view-header-nav">
            <Menu
                style={{ width: '100%', height: '100%', border: 'none' }}
                mode="horizontal"
                defaultSelectedKeys={[defaultSelectedKeys]}
            >
                {menuList.map((item) => {
                    return (
                        <Menu.Item style={{ height: '100%', verticalAlign: 'top' }} key={item.navKey}>
                            <Link to={item.navLink}>{item.navName}</Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
        </div>
    );
};

export default HeaderNav;
