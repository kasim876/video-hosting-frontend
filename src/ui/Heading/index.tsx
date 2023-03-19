import {FC} from 'react';

import classes from './Heading.module.scss';

interface IHeading {
  title: string;
}

export const Heading: FC<IHeading> = ({title}) => {
  return <h2 className={classes.root}>{title}</h2>;
};
