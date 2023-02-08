import React, {FC} from 'react';
import {useParams} from 'react-router-dom';

const Video: FC = () => {
  return (
    <div>
      <h1>Video id: {useParams().id}</h1>
    </div>
  );
};

export default Video;
