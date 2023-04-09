import {Dispatch, FC, SetStateAction, forwardRef} from 'react';

import classes from './UploadVideo.module.scss';
import UploadVideoForm from './upload-video-form/UploadVideoForm';

interface IUploadModal {
  setIsShow: Dispatch<SetStateAction<boolean>>;
  isShow: boolean;
}

const UploadModal = forwardRef<HTMLFormElement, IUploadModal>(({isShow, setIsShow}, ref) => {
  return (
    <div className={classes.modal}>
      <UploadVideoForm
        ref={ref}
        handleCloseModal={() => setIsShow(false)}
      />
    </div>
  );
});

export default UploadModal;
