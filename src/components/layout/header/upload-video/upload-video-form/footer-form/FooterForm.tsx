import classNames from 'classnames';
import {FC} from 'react';
import {MdCheckCircle, MdUpload} from 'react-icons/md';

import ButtonSolid from '@/components/ui/button-solid/ButtonSolid';

import classes from './FooterForm.module.scss';

interface IFooterForm {
  percent: number;
  isUploaded: boolean;
}

const FooterForm: FC<IFooterForm> = ({isUploaded, percent}) => {
  return (
    <div className={classes.root}>
      <div className={classNames(classes.status, isUploaded && classes.iconsUploaded)}>
        <MdUpload className={classes.uploadIcon} />
        <MdCheckCircle className={classes.checkIcon} />
        <span>{isUploaded ? 'Видео загружено' : `Загрузка ${percent}%...`}</span>
      </div>
      <div>
        <ButtonSolid disabled={!isUploaded}>Опубликовать</ButtonSolid>
      </div>
    </div>
  );
};

export default FooterForm;
