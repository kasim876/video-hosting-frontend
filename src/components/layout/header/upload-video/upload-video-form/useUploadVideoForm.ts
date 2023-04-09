import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {useCreateVideoMutation} from '@/store/api/video.api';

import {IMediaResponse} from '@/types/media.interface';
import {IVideoDto} from '@/types/video.interface';

interface IUseUploadForm {
  handleCloseModal: () => void;
}

export const useUploadVideoForm = ({handleCloseModal}: IUseUploadForm) => {
  const {
    register,
    formState: {errors},
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
  } = useForm<IVideoDto>({
    mode: 'onSubmit',
  });

  const [createVideo, {isSuccess}] = useCreateVideoMutation();

  const onSubmit: SubmitHandler<IVideoDto> = data => {
    createVideo(data).then(() => {
      handleCloseModal();
      reset();
    });
  };

  const videoPath = watch('videoPath');
  const thumbnailPath = watch('thumbnailPath');

  const handleUploadVideo = (data: IMediaResponse) => {
    setValue('videoPath', data.name);
    setValue('name', data.name);
  };

  const [isSelected, setIsSelected] = useState(false);

  const [percent, setPercent] = useState(0);
  const [isUpload, setIsUpload] = useState(false);

  const setProgressPercent = (value: number) => {
    setPercent(value);

    if (value === 100) setIsUpload(true);
  };

  return {
    form: {register, errors, control, handleSubmit, onSubmit},
    media: {handleUploadVideo, videoPath, thumbnailPath},
    status: {setProgressPercent, setIsSelected, isSelected, percent, isUpload},
  };
};
