import React from 'react';
import { paths } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutIcon from 'shared/assets/icons/about-us.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  theme?: AppLinkTheme;
  authOnly?: boolean;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: paths.main,
        Icon: MainIcon,
        text: 'main',
    },
    {
        path: paths.about,
        Icon: AboutIcon,
        text: 'about',
    },
    {
        path: paths.profile,
        Icon: ProfileIcon,
        text: 'profile-page',
        authOnly: true,
    },
];
