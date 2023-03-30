import classNames from 'classnames';
import {ButtonHTMLAttributes, FC, PropsWithChildren, forwardRef} from 'react';

import classes from './ButtonOutlined.module.scss';

const ButtonOutlined = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>(
  ({children, className, ...props}, ref) => {
    return (
      <button
        className={classNames(classes.root, className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default ButtonOutlined;
