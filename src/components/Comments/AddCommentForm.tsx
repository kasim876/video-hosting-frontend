import {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {MdSend} from 'react-icons/md';

import Field from '@/ui/Field';

import classes from './Comments.module.scss';

export const AddCommentForm: FC = () => {
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<any>({mode: 'onSubmit'});

  const onSubmit: SubmitHandler<any> = async data => {};

  return (
    <form className={classes.form}>
      <Field
        placeholder="Введите комментарий"
        {...register('message', {
          required: 'Введите сообщение',
        })}
      />
      <button
        style={{
          flexShrink: 0,
          borderRadius: '0.5rem',
          color: '#fff',
          marginLeft: 10,
          width: 50,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--field-bg)',
          fontSize: '1.5rem',
        }}
      >
        <MdSend />
      </button>
    </form>
  );
};
