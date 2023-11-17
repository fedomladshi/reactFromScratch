import { Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/ErrorFallback/ErrorFallback';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getAuthUserData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useAppSelector(getAuthUserData);

    const routes = useMemo(() => routeConfig.filter(({ authOnly }) => {
        if (authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => window.location.reload()}
                >
                    <Routes>
                        {
                            routes
                                .map(({ path, element }) => <Route path={path} element={element} />)
                        }
                    </Routes>
                </ErrorBoundary>
            </Suspense>
        </div>
    );
};

export default memo(AppRouter);
