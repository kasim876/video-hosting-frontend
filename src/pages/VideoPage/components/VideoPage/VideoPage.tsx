import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {VideoService} from '@/services/video.service';
import {IVideo} from '@/types/video.interface';

import Comments from '../Comments/Comments';
import Player from '../Player/Player';
import VideoDetail from '../VideoDetail/VideoDetail';

import classes from './VideoPage.module.scss';

export const VideoPage: FC = () => {
  const [video, setVideo] = useState<IVideo>();
  const {id} = useParams<{id?: string}>();

  useEffect(() => {
    if (id) {
      VideoService.getOne(+id).then(data => setVideo(data));
    }
  }, [id]);

  if (!video) {
    return null;
  }

  return (
    <div>
      <div className={classes.root}>
        <Player
          videoPath={video.videoPath}
          thumbnailPath={video.thumbnailPath}
        />
        <Comments comments={video.comments} />
      </div>
      <div className={classes.root}>
        <VideoDetail video={video} />
        <div></div>
      </div>
    </div>
  );
};
