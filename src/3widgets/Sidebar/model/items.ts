import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import React from 'react';
import HomeIcon from '6shared/assets/icons/outline-home.svg';
import InfoIcon from '6shared/assets/icons/outline-info.svg';
import UserIcon from '6shared/assets/icons/outline-user.svg';

export interface SidebarItemTypes {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemTypes[] = [
    {
        path: RoutePath.main,
        text: 'Home',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: InfoIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: UserIcon,
    },
];
