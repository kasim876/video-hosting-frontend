import Image from 'next/image';
import Link from 'next/link';
import {FC, useState} from 'react';

import useAuth from '@/hooks/useAuth';

import logo from '@/assets/images/logo.svg';

import {useGetProfileQuery} from '@/store/api/api';

import classes from './Sidebar.module.scss';
import Menu from './menu/Menu';
import {categories, menu} from './menu/menu.data';

const Sidebar: FC = () => {
  const {user} = useAuth();

  const {data, isSuccess} = useGetProfileQuery(null, {
    skip: !user,
  });

  return (
    <aside className={classes.root}>
      <Link href="/">
        <Image
          src={logo}
          width={215}
          height={43}
          alt="rutube"
        />
      </Link>
      <Menu
        list={menu}
        title="меню"
      />
      {isSuccess && (
        <Menu
          title="подписки"
          list={data.subscriptions.map(({toChannel}) => {
            return {
              link: `/c/${toChannel.id}`,
              title: toChannel.name,
              image: process.env.REACT_APP_API + toChannel.avatarPath,
            };
          })}
        />
      )}
      <Menu
        list={categories}
        title="категории"
      />
    </aside>
  );
};

export default Sidebar;
