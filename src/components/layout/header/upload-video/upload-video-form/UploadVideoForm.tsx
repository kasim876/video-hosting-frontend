import {forwardRef} from 'react';
import {Controller} from 'react-hook-form';

import Field from '@/components/ui/field/Field';
import Textarea from '@/components/ui/textarea/Textarea';
import UploadField from '@/components/ui/upload-field/UploadField';

import {IMediaResponse} from '@/types/media.interface';

import classes from './UploadVideoForm.module.scss';
import FooterForm from './footer-form/FooterForm';
import {useUploadVideoForm} from './useUploadVideoForm';
import VideoInformation from './video-information/VideoInformation';

interface IUploadVideoForm {
  handleCloseModal: () => void;
}

const UploadVideoForm = forwardRef<HTMLFormElement, IUploadVideoForm>(({handleCloseModal}, ref) => {
  const {form, media, status} = useUploadVideoForm({handleCloseModal});

  return (
    <form
      ref={ref}
      onSubmit={form.handleSubmit(form.onSubmit)}
      className={classes.root}
    >
      {status.isSelected ? (
        <>
          <div className="w-7/12 pr-6 pt-3">
            <Field
              {...form.register('name', {required: 'Введите название'})}
              placeholder="Название"
              error={form.errors.name}
            />
            <Textarea
              {...form.register('description')}
              rows={7}
              placeholder="Описание"
            />
            <div className="mt-8">
              <Controller
                control={form.control}
                name="thumbnailPath"
                render={({field: {onChange}}) => (
                  <UploadField
                    folder="thumbnail"
                    onChange={(data: IMediaResponse) => {
                      onChange(data.name);
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-5/12 p-3 pl-10">
            <VideoInformation
              thumbnailPath={media.thumbnailPath}
              isUploaded={status.isUpload}
            />
          </div>
          <FooterForm
            isUploaded={status.isUpload}
            percent={status.percent}
          />
        </>
      ) : (
        <div className={classes.uploadScreen}>
          <Controller
            control={form.control}
            name="videoPath"
            render={() => (
              <UploadField
                folder="video"
                onChange={media.handleUploadVideo}
                setProgress={status.setProgressPercent}
                setIsSelected={status.setIsSelected}
                title="Сначала загрузите видео 👇"
              />
            )}
          />
        </div>
      )}
    </form>
  );
});

export default UploadVideoForm;
