import {FC} from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/shared/catalog/Catalog';
import ChannelInfo from '@/components/shared/channel-info/ChannelInfo';

import {IUser} from '@/types/user.interface';

import classes from './Channel.module.scss';

const Channel: FC<{user: IUser}> = ({user}) => {
  return (
    <Layout title={user.name}>
      <div className={classes.root}>
        <div className={classes.channelInfo}>
          <ChannelInfo user={user} />
          <article className={classes.descr}>{user.description}</article>
        </div>
        <Catalog
          title="Видео"
          videos={user.videos}
        />
      </div>
    </Layout>
  );
};

export default Channel;
