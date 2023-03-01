import cn from 'clsx';
import {ButtonHTMLAttributes, PropsWithChildren, forwardRef} from 'react';

import classes from './ButtonOutlined.module.scss';

export const ButtonOutlined = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
>(({children, className, ...props}, ref) => {
  return (
    <button
      className={cn(classes.root, className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
