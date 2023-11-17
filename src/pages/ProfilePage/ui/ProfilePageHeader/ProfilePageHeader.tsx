import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getProfileIsLoading, getProfileReadOnly, ProfileActions } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const readOnly = useAppSelector(getProfileReadOnly);
    const isLoading = useAppSelector(getProfileIsLoading);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(ProfileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')} />
            {readOnly ? (
                <Button onClick={onEdit} className={cls.editButton} theme="outline">
                    {t('edit')}
                </Button>
            ) : (
                <>
                    <Button disabled={isLoading} onClick={onCancel} className={cls.editButton} theme="outlineRed">
                        {t('cancel')}
                    </Button>
                    <Button disabled={isLoading} onClick={onSave} className={cls.saveButton} theme="outline">
                        {t('save')}
                    </Button>
                </>
            )}
        </div>

    );
};
