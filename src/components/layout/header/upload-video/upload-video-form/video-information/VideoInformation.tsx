import Image from 'next/image';
import {FC} from 'react';

import classes from './VideoInformation.module.scss';

interface IVideoInformation {
  thumbnailPath?: string;
  isUploaded: boolean;
}
const VideoInformation: FC<IVideoInformation> = ({thumbnailPath, isUploaded}) => {
  console.log(thumbnailPath);

  return (
    <div className={classes.root}>
      {!thumbnailPath ? (
        <div className={classes.thumbnail}>{!isUploaded ? 'Идет загрузка видео...' : 'Загрузите превью'}</div>
      ) : (
        <Image
          src={process.env.REACT_APP_API + thumbnailPath}
          width={344}
          height={190}
          alt=""
        />
      )}
    </div>
  );
};

export default VideoInformation;
