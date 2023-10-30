import { MainPage } from '@/2pages/MainPage';
import { AboutPage } from '@/2pages/AboutPage';
import { ProfilePage } from '@/2pages/ProfilePage';
import { ArticlesPage } from '@/2pages/ArticlesPage';
import { ArticleDetailsPage } from '@/2pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/2pages/ArticleEditPage';
import { AdminPanelPage } from '@/2pages/AdminPanelPage';
import { UserRole } from '@/5entities/User';
import { ForbiddenPage } from '@/2pages/ForbiddenPage';
import { NotFoundPage } from '@/2pages/NotFoundPage';
import { AppRoutes, RoutePath } from '@/6shared/const/router';
import { AppRoutesProps } from '@/6shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
        authOnly: true,
    },

    // Last route
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
