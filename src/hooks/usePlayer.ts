import {useCallback, useEffect, useRef, useState} from 'react';

export const usePlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const originalDuration = videoRef.current?.duration;
    if (originalDuration) setVideoTime(originalDuration);
  }, [videoRef.current?.duration]);

  const toggleVideo = useCallback(() => {
    if (!isPlaying) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const forward = () => {
    if (videoRef.current) videoRef.current.currentTime += 15;
  };

  const revert = () => {
    if (videoRef.current) videoRef.current.currentTime -= 15;
  };

  const volumePlus = () => {
    if (videoRef.current) {
      if (videoRef.current.volume < 1) {
        const volume = Number((videoRef.current.volume + 0.1).toFixed(1));

        videoRef.current.volume = volume;
      }
    }
  };

  const volumeMinus = () => {
    if (videoRef.current) {
      if (videoRef.current.volume > 0) {
        const volume = Number((videoRef.current.volume - 0.1).toFixed(1));

        videoRef.current.volume = volume;
      }
    }
  };

  const fullScreen = () => {
    const video = videoRef.current;
    if (!video) return;

    document.documentElement.requestFullscreen();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / videoTime) * 100);
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [videoTime]);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowDown':
            volumeMinus();
            break;
          case 'ArrowUp':
            volumePlus();
            break;
          case 'ArrowRight':
            forward();
            break;
          case 'ArrowLeft':
            revert();
            break;
          case 'f':
            fullScreen();
            break;
          case ' ':
            toggleVideo();
            break;
          default:
            return;
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [toggleVideo]);

  return {
    videoRef,
    toggleVideo,
    fullScreen,
    status: {
      isPlaying,
      progress,
      currentTime,
      videoTime,
    },
  };
};
