import * as React from 'react';

import './Button.scss';

type Properties = {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = (properties: Properties) => {
  const { children, type, onClick } = properties;
  return (
    <button onClick={onClick} className="button" type={type}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: undefined,
  onClick: undefined
};
