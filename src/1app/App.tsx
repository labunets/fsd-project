import React, { Suspense, useEffect } from 'react';
import { classNames } from '6shared/lib/classNames/classNames';
import { AppRouter } from '1app/providers/router';
import { Navbar } from '3widgets/Navbar';
import { Sidebar } from '3widgets/Sidebar';
import '1app/styles/index.scss';
import { useTheme } from '1app/providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import { userActions } from '5entities/User';
import { useNavigate } from 'react-router-dom';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
