import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/ErrorFallback/ErrorFallback';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => window.location.reload()}
            >
                <Routes>
                    {
                        routeConfig
                            .map(({ path, element }) => <Route path={path} element={element} />)
                    }
                </Routes>
            </ErrorBoundary>
        </Suspense>
    </div>
);

export default AppRouter;
