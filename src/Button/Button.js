import React from 'react';

import './Button.css';

export const buttonTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

const Button = ({ text, type }) => {
  return (
    <button
      className={`button button--${type}`}
    >
      {text}
    </button>
  );
};

export default Button;
