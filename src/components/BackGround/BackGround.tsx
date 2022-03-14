import * as React from 'react';
import { addAlpha } from '../../helper/hexToApha';
import { randomColor } from '../../helper/rondomColor';

import './BackGround.scss';

type Properties = {
  children: React.ReactNode;
  img?: string;
  color?: string;
};

const BackGround = (properties: Properties) => {
  const { children, img, color } = properties;
  return (
    <div
      className="background"
      style={{
        background: img
          ? `linear-gradient(#${addAlpha(randomColor(), 0.5)}, #${addAlpha(
              randomColor(),
              0.5
            )}),
    url(${img})`
          : color /* Chrome 10-25, Safari 5.1-6 */,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {children}
    </div>
  );
};

export default BackGround;

BackGround.defaultProps = {
  img: undefined,
  color: '#F6F7F7'
};
