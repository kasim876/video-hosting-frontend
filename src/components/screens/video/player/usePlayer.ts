import {useCallback, useEffect, useRef, useState} from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

import {IVideo} from '@/types/video.interface';

export const usePlayer = (video: IVideo) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<Player | null>(null);

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
    const videoElement = videoRef.current;
    if (!videoElement) return;

    playerRef.current = videojs(videoElement, options);
  }, [options]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case ' ':
          e.preventDefault();
          playerRef.current.paused() ? playerRef.current.play() : playerRef.current.pause();
          break;
        case 'f':
          e.preventDefault();
          playerRef.current.isFullscreen() ? playerRef.current.exitFullscreen() : playerRef.current.requestFullscreen();
          break;
        case 'm':
          e.preventDefault();
          playerRef.current.muted() ? playerRef.current.muted(false) : playerRef.current.muted(true);
          break;
        default:
          return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
    videoRef,
    playerRef,
  };
};
