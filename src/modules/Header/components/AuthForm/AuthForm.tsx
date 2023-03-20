import {Dispatch, SetStateAction, forwardRef} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {useAppDispatch} from '@/hooks/useAppDispatch';
import {EMAIL_PATTERN} from '@/modules/Header/consts';
import {login as loginAction, register as registerAction} from '@/store/auth/auth.actions';
import {IAuthFields} from '@/types/auth.interface';
import {ButtonSolid} from '@/ui/ButtonSolid';
import Field from '@/ui/Field';

import classes from './AuthForm.module.scss';

interface IAuthForm {
  type: string;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export const AuthForm = forwardRef<HTMLFormElement, IAuthForm>(({type, setIsShow}, ref) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IAuthFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IAuthFields> = async data => {
    if (type === 'login') {
      dispatch(loginAction(data));
    } else {
      dispatch(registerAction(data));
    }

    setIsShow(false);
  };

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
      >
        {type === 'register' && (
          <Field
            error={errors.name}
            placeholder="Имя"
            {...register('name', {
              required: 'Введите имя',
              minLength: {
                value: 3,
                message: 'Минимальная длина - 3 символа',
              },
            })}
          />
        )}
        <Field
          error={errors.email}
          placeholder="E-mail"
          {...register('email', {
            required: 'Введите e-mail',
            pattern: {
              value: EMAIL_PATTERN,
              message: 'Введите корректный адрес электронной почты',
            },
          })}
        />
        <Field
          error={errors.password}
          placeholder="Пароль"
          type="password"
          {...register('password', {
            required: 'Введите пароль',
            minLength: {
              value: 6,
              message: 'Минимальная длина пароля - 6 символов',
            },
          })}
        />
        <ButtonSolid>{type === 'register' ? 'Зарегестрироваться' : 'Войти'}</ButtonSolid>
      </form>
    </div>
  );
});
