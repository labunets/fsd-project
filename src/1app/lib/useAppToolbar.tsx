import { ReactElement } from 'react';
import { AppRoutes } from '@/6shared/const/router';
import { ScrollToolbar } from '@/3widgets/ScrollToolbar';
import { useRouteChange } from '@/6shared/lib/router/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
