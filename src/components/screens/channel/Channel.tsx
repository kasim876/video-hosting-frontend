import {FC} from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/shared/catalog/Catalog';
import ChannelInfo from '@/components/shared/channel-info/ChannelInfo';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

import {linkify} from '@/utils/linkify';

import {IUser} from '@/types/user.interface';

import classes from './Channel.module.scss';

const Channel: FC<{user: IUser}> = ({user}) => {
  return (
    <Layout title={user.name}>
      <div className={classes.root}>
        <div className={classes.channelInfo}>
          <div className="flex items-center justify-between">
            <ChannelInfo user={user} />
            <SubscribeButton toChannel={user} />
          </div>
          <article
            className={classes.article}
            dangerouslySetInnerHTML={{__html: linkify(user.description)}}
          />
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
