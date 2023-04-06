import {FC, useEffect, useRef} from 'react';
import 'video.js/dist/video-js.css';

import {IVideo} from '@/types/video.interface';

import classes from './Player.module.scss';
import {usePlayer} from './usePlayer';

interface IPlayer {
  video: IVideo;
}

const Player: FC<IPlayer> = ({video}) => {
  const {playerRef, videoRef} = usePlayer(video);

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
