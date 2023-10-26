import { userActions } from 'entities/User';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useTheme } from 'shared/contexts/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { ErrorFallback } from 'shared/ui/ErrorFallback/ErrorFallback';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from './hooks/redux';
import AppRouter from './router/ui/AppRouter';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => window.location.reload()}
            >
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </ErrorBoundary>
        </div>
    );
};

export default App;
