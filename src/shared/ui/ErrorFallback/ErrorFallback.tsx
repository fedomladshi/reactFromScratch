import { useTranslation } from 'react-i18next';
import './ErrorFallback.module.scss';
import { useErrorBoundary } from 'react-error-boundary';

export const ErrorFallback = () => {
    const { t } = useTranslation();
    const { resetBoundary } = useErrorBoundary();
    return (
        <div>
            {t('error-boundary')}
            <button type="button" onClick={resetBoundary}>{t('try-again')}</button>
        </div>
    );
};
