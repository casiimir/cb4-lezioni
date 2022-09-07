import { useState, useEffect } from 'react';
import { GET } from '../../utils/api.js'; 

import styles from './index.module.scss';

const MovieEntity = ({ movieID }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    GET('movie', movieID)
      .then(data => setMovieData(data));
  }, [])

  const {
    poster_path,
    original_title,
    genres,
    vote_average,
    tagline,
    title
  } = movieData;

  return (
    <div className={ styles.MovieEntity } id="movie-entity">
      <div className={ styles.info }>
        <div className={ styles.title }>
          <p>title</p>
          <h1>{ title }</h1>
        </div>
        <div className={ styles.bottom }>
          <p>rating</p>
          <p>{ vote_average || 'not found' }</p>
          <p>genre</p>
          <ul>
            {
              genres && genres.map(genre => (
                <li key={genre.id}>{ genre.name }</li>
              ))
            }
          </ul>
          <p className={ styles.tagline }>{ tagline }</p>
        </div>
      </div>
      <img className={ styles.poster } src={poster_path && `https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title}/>
      <div className={ styles.book }>
        <button className={ styles.btn }>Book it!</button>
      </div>
    </div>
  )
}

export default MovieEntity;

