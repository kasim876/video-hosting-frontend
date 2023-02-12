import React, {InputHTMLAttributes} from 'react';
import {FieldError} from 'react-hook-form';

import classes from './Field.module.scss';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({error, ...props}, ref) => {
    return (
      <label className={classes.root}>
        <input
          className={classes.input}
          ref={ref}
          {...props}
        />
        {error && <p className={classes.error}>{error.message}</p>}
      </label>
    );
  },
);

export default Field;
