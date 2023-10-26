import { useTranslation } from 'react-i18next';
import { useErrorBoundary } from 'react-error-boundary';
import cls from './ErrorFallback.module.scss';

export const ErrorFallback = () => {
    const { t } = useTranslation();
    const { resetBoundary } = useErrorBoundary();
    return (
        <div className={cls.ErrorFallback}>
            {t('error-boundary')}
            <button type="button" onClick={resetBoundary}>{t('try-again')}</button>
        </div>
    );
};
