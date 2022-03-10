import * as React from 'react';

import img from '../../assets/ansel_elgort_rachel_zegler_4k_hd_west_side_story_2021.jpg';

import './BackGround.scss';

type Properties = {
  children: React.ReactNode;
};

const BackGround = (properties: Properties) => {
  const { children } = properties;
  return (
    <div
      className="background"
      style={{
        background: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {children}
    </div>
  );
};

export default BackGround;
