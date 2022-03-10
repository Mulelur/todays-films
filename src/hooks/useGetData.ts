import * as React from 'react';
import { Get } from '../services/service';

const useGetData = (query: string, pageNumber: number) => {
  const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

  React.useEffect(() => {
    Get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    )
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [query, pageNumber]);
  return null;
};

export default useGetData;
