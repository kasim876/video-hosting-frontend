import classNames from 'classnames';
import {useRouter} from 'next/router';
import {FC} from 'react';

import Layout from '@/components/layout/Layout';

import {videoApi} from '@/store/api/video.api';

import classes from './Video.module.scss';
import Comments from './comments/Comments';
import Player from './player/Player';
import VideoDetail from './video-detail/VideoDetail';

const Video: FC = () => {
  const {query} = useRouter();

  const {data: video} = videoApi.useGetVideoByIdQuery(Number(query.id), {
    skip: !query?.id,
  });

  if (!video) return null;

  return (
    <Layout title={video.name}>
      <div className={classes.root}>
        <Player video={video} />
        <Comments video={video} />
      </div>
      <div className={classNames(classes.root, 'mt-7')}>
        <VideoDetail video={video} />
        <div>Рекомендуемые видео</div>
      </div>
    </Layout>
  );
};

export default Video;
