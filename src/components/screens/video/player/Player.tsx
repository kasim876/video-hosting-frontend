import {FC, useEffect, useRef} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import {IVideo} from '@/types/video.interface';

import classes from './Player.module.scss';

interface IPlayer {
  video: IVideo;
}

const Player: FC<IPlayer> = ({video}) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  const options = {
    controls: true,
    autoplay: true,
    muted: true,
    sources: [
      {
        src: process.env.REACT_APP_API + video.videoPath,
        type: 'video/mp4',
      },
    ],
  };

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className={`video-js`}
        />
      </div>
    </div>
  );
};

export default Player;
