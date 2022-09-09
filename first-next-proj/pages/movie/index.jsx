import {useState, useEffect} from 'react';
import { GET } from '../api/hello'
import { useRouter } from 'next/router';
import styles from './index.module.scss';

const IndexMovie = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GET('movie', 'top_rated', '&language=en-US&page=1')
      .then((data) => setMovies(data.results))
  }, []);

  return (
    <div className={styles.IndexMovie}>
      {
        movies && movies.map(movie => (
          <div className={styles.MovieCard} onClick={() => router.push(`/movie/${movie.id}`)}>
            <h3>{ movie.title } </h3>
            <p>{ movie.vote_average }</p>
          </div>
        ))
      }
    </div>
  )
}

export default IndexMovie;