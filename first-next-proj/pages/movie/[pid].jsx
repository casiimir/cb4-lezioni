import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Snowfall from 'react-snowfall'
import { GET } from '../api/hello'
import styles from './index.module.scss';

const Movie = () => {
  const router = useRouter()
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    GET('movie', router.query.pid, '&language=en-US')
      .then(data => setMovieData(data))
  } , [])
  
  return (
    <div className={styles.Movie}>
      <Snowfall 
        color="darkred"
        style={{  }}
        snowflakeCount={200}
      />
      {
        movieData && <img style={{width: '100vw', height: '100vh', objectFit: 'cover'}} src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={movieData.title} />
      }
    </div>
  )
}

export default Movie;