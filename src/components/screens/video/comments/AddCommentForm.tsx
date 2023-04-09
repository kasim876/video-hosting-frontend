import {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {MdSend} from 'react-icons/md';

import Field from '@/components/ui/field/Field';

import {commentApi} from '@/store/api/comment.api';

import {ICommentDto} from '@/types/comment.interface';

import classes from './Comments.module.scss';

const AddCommentForm: FC<{videoId: number}> = ({videoId}) => {
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<ICommentDto>({mode: 'onSubmit'});

  const [createComment, status] = commentApi.useCreateCommentMutation();

  const onSubmit: SubmitHandler<ICommentDto> = async data => {
    createComment({...data, videoId}).then(() => reset());
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        error={errors.message}
        placeholder="Введите комментарий"
        {...register('message', {
          required: 'Введите сообщение',
        })}
        onKeyDown={e => e.stopPropagation()}
      />
      <button disabled={status.isLoading}>
        <MdSend />
      </button>
    </form>
  );
};

export default AddCommentForm;
