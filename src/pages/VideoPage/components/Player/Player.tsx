import {FC, useEffect, useState} from 'react';
import {IoMdPause, IoMdPlay} from 'react-icons/io';
import {MdFullscreen} from 'react-icons/md';

import {usePlayer} from '@/hooks/usePlayer';

import classes from './Player.module.scss';

interface IPlayer {
  videoPath: string;
  thumbnailPath: string;
}

const Player: FC<IPlayer> = ({videoPath, thumbnailPath}) => {
  const {fullScreen, status, toggleVideo, videoRef} = usePlayer();

  return (
    <div className={classes.wrapper}>
      <video
        ref={videoRef}
        className={classes.player}
        src={process.env.REACT_APP_API + videoPath}
        onClick={toggleVideo}
        poster={process.env.REACT_APP_API + thumbnailPath}
        preload="metadata"
        autoPlay
      />
      <div className={classes.controls}>
        <button onClick={toggleVideo}>{status.isPlaying ? <IoMdPause /> : <IoMdPlay />}</button>
        <div className={classes.progressBarWrapper}>
          <div
            className={classes.progressBar}
            style={{
              width: `${status.progress}%`,
            }}
          />
        </div>
        <div className={classes.timeDisplay}>
          <p>{Math.floor(status.currentTime / 60) + ':' + ('0' + Math.floor(status.currentTime % 60)).slice(-2)}</p>
          <p>{Math.floor(status.videoTime / 60) + ':' + ('0' + Math.floor(status.videoTime % 60)).slice(-2)}</p>
        </div>
        <button onClick={fullScreen}>
          <MdFullscreen />
        </button>
      </div>
    </div>
  );
};

export default Player;
