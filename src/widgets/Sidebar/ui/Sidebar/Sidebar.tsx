import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import { sidebarItemsList } from 'widgets/Sidebar/model/items';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getAuthUserData } from 'entities/User';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const isAuth = useAppSelector(getAuthUserData);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const itemsList = useMemo(
        () => sidebarItemsList.filter(({ authOnly }) => {
            if (authOnly && !isAuth) {
                return false;
            }
            return true;
        }).map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )),
        [collapsed, isAuth],
    );

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                {itemsList}
            </div>
            <Button
                data-testid="sidebar-toggle"
                square
                size={ButtonSize.L}
                className={cls.collapseBtn}
                onClick={toggle}
                theme="backgroundInverted"
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});
