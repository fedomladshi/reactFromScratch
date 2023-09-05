import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/config/routes';
import { PageLoader } from 'widgets/PageLoader';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/ErrorFallback/ErrorFallback';

const AppRouter = () => (
    <div className="page-wrapper">
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => window.location.reload()}
        >
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {
                        routeConfig
                            .map(({ path, element }) => <Route path={path} element={element} />)
                    }
                </Routes>
            </Suspense>
        </ErrorBoundary>
    </div>
);

export default AppRouter;
