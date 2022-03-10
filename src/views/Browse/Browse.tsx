import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Movies } from '../../Interface/movies.interface';
import { Get } from '../../services/service';

import './Browse.scss';

const Browse = () => {
  const [movies, setMovies] = React.useState<Movies[]>([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();

  const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

  const observer = React.useRef<IntersectionObserver | null>(null);

  const lastMovieReference = React.useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting && hasMore) {
          setPageNumber((preNumber) => preNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  React.useEffect(() => {
    setLoading(true);
    Get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    )
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    Get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    )
      .then((response) => {
        setMovies([...movies, ...response.data.results]);
        setHasMore(response.data.results.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setLoading(false);
      });
  }, [pageNumber]);

  return (
    <div>
      {movies?.map((item: Movies, index: number) =>
        movies.length === index + 1 ? (
          <div
            onClick={() => history.push(`/details/:${item.id}`)}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
            key={item.id}
            ref={lastMovieReference}
          >
            {item.original_title}
          </div>
        ) : (
          <div
            onClick={() => history.push(`/details/${item.id}`)}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
            key={item.id}
          >
            {item.original_title}
          </div>
        )
      )}
      {loading && <p>loading...</p>}
    </div>
  );
};

export default Browse;
