import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/5entities/User';
import HomeIcon from '@/6shared/assets/icons/outline-home.svg';
import InfoIcon from '@/6shared/assets/icons/outline-info.svg';
import UserIcon from '@/6shared/assets/icons/outline-user.svg';
import ArticlesIcon from '@/6shared/assets/icons/outline-grid.svg';
import { SidebarItemTypes } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/6shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemTypes[] = [
        {
            path: getRouteMain(),
            text: 'Home',
            Icon: HomeIcon,
        },
        {
            path: getRouteAbout(),
            text: 'About',
            Icon: InfoIcon,
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                Icon: UserIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Articles',
                Icon: ArticlesIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
