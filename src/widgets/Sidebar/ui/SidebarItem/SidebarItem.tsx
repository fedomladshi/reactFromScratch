import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
     item: SidebarItemType;
     collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation();
    const {
        item: {
            path, theme = 'inverted', text, Icon,
        },
        collapsed = false,
    } = props;

    return (
        <AppLink
            theme={theme}
            to={path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>
                {t(text)}
            </span>
        </AppLink>
    );
});
