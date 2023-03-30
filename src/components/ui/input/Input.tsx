import classNames from 'classnames';
import {InputHTMLAttributes, forwardRef} from 'react';

import classes from './Input.module.scss';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({className, ...props}, ref) => {
  return (
    <input
      className={classNames(classes.root, className)}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
