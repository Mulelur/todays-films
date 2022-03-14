import * as React from 'react';
import Clear from './assets/Clear.icons';
import Menu from './assets/Menu.icons';

type Properties = {
  name: string;
  style: React.CSSProperties;
  title?: string;
  className?: string;
};

const Icons = (properties: Properties) => {
  const { name, style, title, className } = properties;
  const container = (type: string) => {
    let svg = <></>;

    switch (type.toLowerCase()) {
      case 'menu':
        svg = <Menu style={style} />;
        break;
      case 'clear':
        svg = <Clear style={style} />;
        break;
      default:
        svg = <></>;
        break;
    }

    return (
      <span className={className} title={title}>
        {svg}
      </span>
    );
  };

  return container(name);
};

Icons.defaultProps = {
  style: {},
  title: '',
  className: ''
};

export default Icons;
