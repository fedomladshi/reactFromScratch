import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ProfileReducer } from 'entities/Profile';
import { ReducersList, useDynamicReducerLoader } from 'shared/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
    profile: ProfileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    useDynamicReducerLoader(initialReducers, true);

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            {t('profile-page')}
        </div>
    );
};

export default ProfilePage;
