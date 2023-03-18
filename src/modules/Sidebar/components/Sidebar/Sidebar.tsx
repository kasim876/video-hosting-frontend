import {FC} from 'react';

import {useAuth} from '@/hooks/useAuth';
import {categories, menu} from '@/modules/Sidebar/config/menu.data';
import {IMenuItem} from '@/modules/Sidebar/types/menu.interface';
import {useGetProfileQuery} from '@/store/api';

import {Menu} from '../Menu/Menu';

import classes from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  const {user} = useAuth();

  const {data} = useGetProfileQuery(null, {
    skip: !user,
  });

  let subscriptions: IMenuItem[] = [];

  if (data?.subscriptions)
    subscriptions = data?.subscriptions.map<IMenuItem>(sub => ({
      link: `/channel/${sub.id}`,
      title: sub.toChannel.name,
      image: sub.toChannel.avatarPath,
    }));

  return (
    <aside className={classes.root}>
      <Menu list={menu} />
      <Menu list={categories} />
      {user && (
        <Menu
          title="подписки"
          list={subscriptions}
        />
      )}
    </aside>
  );
};
