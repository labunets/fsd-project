import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '5entities/User';
import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import HomeIcon from '6shared/assets/icons/outline-home.svg';
import InfoIcon from '6shared/assets/icons/outline-info.svg';
import UserIcon from '6shared/assets/icons/outline-user.svg';
import ArticlesIcon from '6shared/assets/icons/outline-grid.svg';
import { SidebarItemTypes } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemTypes[] = [
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

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Profile',
                    Icon: UserIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Articles',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
