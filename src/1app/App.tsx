import React, { Suspense, useEffect } from 'react';
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

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
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
                            toolbar={<div>123123</div>}
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
}

export default App;
