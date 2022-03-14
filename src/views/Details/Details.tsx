import * as React from 'react';
import { useParams } from 'react-router-dom';
import BackGround from '../../components/BackGround';
import Notification from '../../components/common/feedBack/Notification';
import Form from '../../components/Form';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import { addAlpha } from '../../helper/hexToApha';
import { renderColor } from '../../helper/renderColor';
import { Movie } from '../../Interface/movies.interface';
import { Get } from '../../services/service';

import './Details.scss';

const Details = () => {
  const { id } = useParams<never>();
  const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
  const [loading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState<Movie>();

  React.useEffect(() => {
    setLoading(true);
    Get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US.`
    )
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <BackGround
      img={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
    >
      <NavBar />
      <div className="details">
        <div className="details__col">
          <div className="details__thumbnail">
            <div
              className="details__thumbnail-img"
              style={{
                background: `url(https://image.tmdb.org/t/p/original/${movies?.poster_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
        <div className="details__col">
          <div className="details__desc">
            <div className="details__desc-title">
              <h2 className="details__desc-heading">
                {movies?.original_title}
              </h2>
              <span className="details__desc-title--release">
                ({movies?.release_date.trim().slice(0, 4)})
              </span>
            </div>
            <div>{movies?.tagline}</div>
            <div
              style={{
                backgroundColor: addAlpha(renderColor(movies?.vote_count), 0.5),
                borderBottom: `3px solid ${renderColor(movies?.vote_count)}`
              }}
              className="details__desc-rating"
            >
              Rating: <span>{movies?.vote_count}</span>
            </div>
            <div>
              <div className="details__desc-heading">OverView</div>
              <div>
                <p>{movies?.overview}</p>
              </div>
            </div>
            <div>
              <div className="details__desc-heading">Genres</div>
              <div className="details__genres">
                {movies?.genres.map((g) => (
                  <span className="details__genres-title">{g.name}</span>
                ))}
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </BackGround>
  ) : (
    <Loading loading={loading} />
  );
};

export default Details;
