import {FC} from 'react';
import {useParams} from 'react-router-dom';

import classes from './ChannelPage.module.scss';

export const ChannelPage: FC = () => {
  const {id} = useParams();

  return <div className={classes.root}>ChannelPage {id}</div>;
};
