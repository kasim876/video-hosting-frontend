import {InputHTMLAttributes, forwardRef} from 'react';
import {FieldError} from 'react-hook-form';

import {Input} from '@ui/Input';

import classes from './AuthField.module.scss';

type Props = {
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const AuthField = forwardRef<HTMLInputElement, Props>(
  ({error, type = 'text', ...rest}, ref) => {
    return (
      <div className={classes.root}>
        <Input
          ref={ref}
          type={type}
          {...rest}
        />
        {error && <div className={classes.error}>{error.message}</div>}
      </div>
    );
  },
);

export default AuthField;
