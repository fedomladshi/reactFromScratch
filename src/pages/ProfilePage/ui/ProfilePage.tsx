import { classNames } from 'shared/lib/classNames/classNames';
import {
    fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadOnly, ProfileActions, ProfileCard, ProfileReducer,
} from 'entities/Profile';
import { ReducersList, useDynamicReducerLoader } from 'shared/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: ProfileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    useDynamicReducerLoader(reducers, true);

    const dispatch = useAppDispatch();

    const form = useAppSelector(getProfileForm);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileIsLoading);
    const readOnly = useAppSelector(getProfileReadOnly);

    const onChangeLastname = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onChangeFirstname = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ first: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ age: value }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ country: value }));
    }, [dispatch]);

    const onChangeCity = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value) => {
        dispatch(ProfileActions.updateProfile({ username: value }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <ProfilePageHeader />
            <ProfileCard
                data={form}
                isLoading={isLoading}
                error={error}
                readOnly={readOnly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}

            />
        </div>
    );
};

export default ProfilePage;
