import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Catalog} from '@/components/Catalog';
import ChannelInfo from '@/components/ChannelInfo';
import UserService from '@/services/user.service';
import {IUser} from '@/types/user.interface';
import Loading from '@/ui/Loading';

import classes from './ChannelPage.module.scss';

export const ChannelPage: FC = () => {
  const [user, setUser] = useState<IUser | null>();

  const {id} = useParams();

  useEffect(() => {
    setUser(null);

    setTimeout(() => {
      UserService.getUser(Number(id)).then(user => setUser(user));
    }, 1000);
  }, [id]);

  if (!user) return <Loading />;

  return (
    <div className={classes.root}>
      <div className={classes.channelInfo}>
        <ChannelInfo
          user={user}
          descr={`${user.subscribersCount} подписчиков`}
        />
        <article className={classes.descr}>{user.description}</article>
      </div>

      <Catalog
        title="Рекомендации"
        videos={user?.videos}
      />
    </div>
  );
};
