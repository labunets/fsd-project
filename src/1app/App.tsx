import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/5entities/User';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Navbar } from '@/3widgets/Navbar';
import { Sidebar } from '@/3widgets/Sidebar';
import './styles/index.scss';
import { useTheme } from '@/6shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/3widgets/PageLoader';
import { ToggleFeatures } from '@/6shared/lib/features';
import { MainLayout } from '@/6shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/6shared/layouts/AppLoaderLayout';
import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div id="app" className={classNames('app_redesigned', {}, [theme])}>
                        <AppLoaderLayout />{' '}
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames('app_redesigned', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
