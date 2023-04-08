import {TextareaHTMLAttributes, forwardRef} from 'react';
import {FieldError} from 'react-hook-form';

import classes from './Textarea.module.scss';

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError;
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(({error, ...rest}, ref) => {
  return (
    <div className={classes.root}>
      <textarea
        ref={ref}
        {...rest}
      />
    </div>
  );
});

export default Textarea;
