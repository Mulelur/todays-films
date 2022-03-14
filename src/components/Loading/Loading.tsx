import * as React from 'react';
import img from '../../assets/logo.png';

import './Loading.scss';

type Properties = {
  loading: boolean;
};
const Loading = (properties: Properties) => {
  const { loading } = properties;

  return (
    <div className="loading">
      <div>
        <img src={img} alt="logo" />
      </div>
      <div> {loading && <p>Loading...</p>}</div>
    </div>
  );
};

export default Loading;
