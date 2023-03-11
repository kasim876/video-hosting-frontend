import {shuffle} from '@funboxteam/diamonds';
import {FC, useEffect} from 'react';

import {useAppDispatch} from '@hooks/useAppDispatch';
import {useAppSelector} from '@hooks/useAppSelector';

import {fetchVideos} from '@pages/HomePage/api';

import {VideoCard} from '@components/VideoCard';

import {loadingVideos, loadingVideosSuccess} from '@store/slices/videoSlice';

import classes from './HomePage.module.scss';

export const HomePage: FC = () => {
  const videos = useAppSelector(state => state.video.videos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadingVideos());

    fetchVideos()
      .then(res => shuffle(res))
      .then((data: any[]) => dispatch(loadingVideosSuccess(data)));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      {videos ? (
        videos.map(video => (
          <VideoCard
            video={video}
            key={video.id}
          />
        ))
      ) : (
        <h2>Нет видео</h2>
      )}
    </div>
  );
};
