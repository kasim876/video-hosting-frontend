import classNames from 'classnames';
import {ButtonHTMLAttributes, PropsWithChildren, forwardRef} from 'react';

import classes from './ButtonSolid.module.scss';

const ButtonSolid = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>(
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

export default ButtonSolid;
