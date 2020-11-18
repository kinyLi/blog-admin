interface MenuItemInterface {
    navName: string;
    navKey: number;
}

interface HeaderNavPropsInterface {
    menuList?: MenuItemInterface[];
    logo?: string;
    defaultSelectedKeys?: string;
}

export type { HeaderNavPropsInterface, MenuItemInterface };
