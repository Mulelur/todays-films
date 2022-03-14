import * as React from 'react';
import { useHistory } from 'react-router-dom';
import BackGround from '../../components/BackGround';
import Loading from '../../components/Loading';
import Movie from '../../components/Movie';
import NavBar from '../../components/NavBar';
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
    <BackGround color="#0F141E">
      <NavBar />
      <div className="browse">
        {movies?.map((item: Movies, index: number) =>
          movies.length === index + 1 ? (
            <div
              onClick={() => history.push(`/details/:${item.id}`)}
              onKeyPress={() => {}}
              tabIndex={index}
              role="button"
              key={item.id}
              ref={lastMovieReference}
            >
              <Movie
                img={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                title={item.original_title}
                rating={item.vote_average}
                avgRating={item.vote_count}
                year={item.release_date}
              />
            </div>
          ) : (
            <div
              onClick={() => history.push(`/details/${item.id}`)}
              onKeyPress={() => {}}
              tabIndex={index}
              role="button"
              key={item.id}
            >
              <Movie
                img={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                title={item.original_title}
                rating={item.vote_average}
                avgRating={item.vote_count}
                year={item.release_date}
              />
            </div>
          )
        )}
        {loading && <Loading loading={loading} />}
      </div>
    </BackGround>
  );
};

export default Browse;
