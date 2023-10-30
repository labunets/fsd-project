import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/5entities/User';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Navbar } from '@/3widgets/Navbar';
import { Sidebar } from '@/3widgets/Sidebar';
import './styles/index.scss';
import { useTheme } from '@/6shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.getAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
