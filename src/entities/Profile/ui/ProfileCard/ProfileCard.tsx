import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CustomInput, Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { useEffect, useRef } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (v: string) => void;
  onChangeLastname?: (v: string) => void;
  onChangeCurrency?: (v: Currency) => void;
  onChangeAge?: (v: string) => void;
  onChangeCountry?: (v: string) => void;
  onChangeCity?: (v: string) => void;
  onChangeAvatar?: (v: string) => void;
  onChangeUsername?: (v: string) => void;

}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCurrency,
    onChangeAge,
    onChangeCountry,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
}: ProfileCardProps) => {
    const firstInputRef = useRef<CustomInput>(null);

    const { t } = useTranslation('profile');

    useEffect(() => {
        if (!readOnly) {
            firstInputRef.current?.focus();
        }
        if (readOnly) {
            firstInputRef.current?.blur();
        }
    }, [readOnly]);

    return (
        <div className={classNames(cls.ProfileCard, { [cls.centered]: isLoading || error, [cls.editing]: !readOnly }, [className])}>
            {isLoading && <Loader />}
            {
                !isLoading && !error && (
                    <>
                        {data?.avatar
                        && (
                            <div className={cls.avatarWrapper}>
                                <Avatar src={data?.avatar} alt="user-avatar" />
                            </div>
                        )}
                        <Input
                            ref={firstInputRef}
                            readOnly={readOnly}
                            className={cls.input}
                            value={data?.first}
                            placeholder={t('first-placeholder')}
                            onChange={onChangeFirstname}
                        />
                        <Input
                            readOnly={readOnly}
                            onChange={onChangeLastname}
                            className={cls.input}
                            value={data?.lastname}
                            placeholder={t('secondname-placeholder')}
                        />
                        <Input
                            readOnly={readOnly}
                            onChange={onChangeAge}
                            className={cls.input}
                            value={data?.age}
                            placeholder={t('age-placeholder')}
                        />
                        <Input
                            readOnly={readOnly}
                            onChange={onChangeCity}
                            className={cls.input}
                            value={data?.city}
                            placeholder={t('city-placeholder')}
                        />
                        <Input
                            readOnly={readOnly}
                            onChange={onChangeAvatar}
                            className={cls.input}
                            value={data?.avatar}
                            placeholder={t('avatar-placeholder')}
                        />
                        <Input
                            readOnly={readOnly}
                            onChange={onChangeUsername}
                            className={cls.input}
                            value={data?.username}
                            placeholder={t('username-placeholder')}
                        />
                        <CurrencySelect
                            className={cls.input}
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readOnly={readOnly}
                        />
                        <CountrySelect
                            className={cls.input}
                            value={data?.country}
                            onChange={onChangeCountry}
                            readOnly={readOnly}
                        />
                    </>
                )
            }
            {!isLoading && error && (
                <Text
                    align="center"
                    theme="error"
                    text={t(error, '', { ns: 'translation' })}
                    title={t('try-to-reload-page', '', { ns: 'translation' })}
                />
            )}
        </div>
    );
};
