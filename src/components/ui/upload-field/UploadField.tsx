import {Dispatch, FC, SetStateAction} from 'react';

import classes from './UploadField.module.scss';
import {useUploadFile} from './useUploadFile';

interface IUploadField {
  onChange: (args: any) => void;
  folder: string;
  setProgress?: (value: number) => void;
  setIsSelected?: Dispatch<SetStateAction<boolean>>;
  title?: string;
}

const UploadField: FC<IUploadField> = ({folder, onChange, setIsSelected, setProgress, title}) => {
  const {uploadFile} = useUploadFile(onChange, folder, setProgress, setIsSelected);

  return (
    <div className={classes.file}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <label className={classes.label}>
        <span className="sr-only">Выберите файл</span>
        <input
          type="file"
          required
          onChange={uploadFile}
          className={classes.input}
        />
      </label>
    </div>
  );
};

export default UploadField;
