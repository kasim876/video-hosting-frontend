import {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {useMutation} from 'react-query';

import {MediaService} from '@/services/media.service';

export const useUploadFile = (
  onChange: (...event: any) => void,
  folder?: string,
  setProgress?: (value: number) => void,
  setIsSelected?: Dispatch<SetStateAction<boolean>>,
) => {
  const {mutateAsync} = useMutation('upload file', (data: FormData) => MediaService.upload(data, folder, setProgress), {
    onSuccess: res => {
      onChange(res);
    },
  });

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files.length) return;

    setIsSelected && setIsSelected(true);

    const formData = new FormData();

    formData.append('media', files[0]);

    await mutateAsync(formData);
  };

  return {uploadFile};
};
