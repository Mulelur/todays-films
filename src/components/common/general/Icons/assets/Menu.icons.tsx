import * as React from 'react';

type Properties = {
  style: React.CSSProperties;
};

const Menu = (properties: Properties) => {
  const { style } = properties;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 270.792 249.118"
      style={style}
    >
      <path
        fill="currentColor"
        d="M0 0h270.792v42.287H0zM0 103.118h270.792v42.288H0zM0 206.835h270.792v42.283H0z"
      />
    </svg>
  );
};

export default Menu;
