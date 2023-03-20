import {InputHTMLAttributes, forwardRef} from 'react';
import {FieldError} from 'react-hook-form';

import {Input} from '@/ui/Input';

import classes from './Field.module.scss';

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

export const Field = forwardRef<HTMLInputElement, IField>(({error, type = 'text', ...rest}, ref) => {
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
});
