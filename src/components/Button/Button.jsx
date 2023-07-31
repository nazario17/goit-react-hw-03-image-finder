import React from 'react';
import css from './Button.module.css'

const Button = ({ onClick, children }) => {
    return (
        <button type="button" className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
