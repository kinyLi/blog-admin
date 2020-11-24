interface MenuItemInterface {
    navName: string;
    navKey: number;
    navLink: string;
}

interface HeaderNavPropsInterface {
    menuList?: MenuItemInterface[];
    logo?: string;
    defaultSelectedKeys?: string;
}

export type { HeaderNavPropsInterface, MenuItemInterface };
