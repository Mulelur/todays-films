import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { useParams } from 'react-router-dom';
import { Movie } from '../../Interface/movies.interface';
import { Get } from '../../services/service';
import Browse from '../Browse';

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

  // eslint-disable-next-line no-console
  console.log(movies);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const openW = () => {
    // const parameters = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    // width=400,height=400,left=-1000,top=-1000`;

    // // eslint-disable-next-line no-restricted-globals
    // open('/', 'test', parameters);

    // eslint-disable-next-line no-restricted-globals
    const newWindow = open('/', 'example', 'width=300,height=300');
    newWindow?.focus();

    // eslint-disable-next-line no-alert
    alert(newWindow?.location.href); // (*) about:blank, loading hasn't started yet

    newWindow?.addEventListener('load', () => {
      const html = ReactDOMServer.renderToString(<Browse />);
      newWindow?.document.body.insertAdjacentHTML('afterbegin', html);
    });
  };

  // let newWindow = open('/', 'example', 'width=300,height=300');
  // newWindow.focus();

  // alert(newWindow.location.href); // (*) about:blank, loading hasn't started yet

  // newWindow.onload = function () {
  //   let html = `<div style="font-size:30px">Welcome!</div>`;
  //   newWindow.document.body.insertAdjacentHTML('afterbegin', html);
  // };

  return !loading ? (
    <div>
      {movies?.original_title}{' '}
      <button
        type="button"
        onClick={() => {
          openW();
        }}
      >
        cll
      </button>
      <img
        alt="igm"
        src={`https://image.tmdb.org/t/p/w1000/${movies?.backdrop_path}`}
      />
    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default Details;
