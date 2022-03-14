import * as React from 'react';
import { renderColor } from '../../helper/renderColor';

import './Movie.scss';

type Properties = {
  img: string;
  title: string;
  rating: number;
  avgRating: number;
  year: string;
};

const Movie = (properties: Properties) => {
  const { img, title, rating, avgRating, year } = properties;
  return (
    <div className="movie">
      <div
        className="movie__thumbnail"
        style={{
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="movie__sashes">
          <span
            style={{ backgroundColor: renderColor(avgRating) }}
            className="movie__sashes-content"
          >
            {rating}
          </span>
        </div>
      </div>
      <div className="movie__detail">
        <span className="movie__title">{title}</span>
        <span>({year.trim().slice(0, 4)})</span>
      </div>
    </div>
  );
};

export default Movie;
