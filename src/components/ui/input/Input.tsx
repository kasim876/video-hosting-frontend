import cn from 'clsx';
import {InputHTMLAttributes, forwardRef} from 'react';

import classes from './Input.module.scss';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({className, ...props}, ref) => {
  return (
    <input
      className={cn(classes.root, className)}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
