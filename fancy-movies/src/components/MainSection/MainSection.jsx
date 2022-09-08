import { useState, useEffect } from 'react';
import MainCard from '../MainCard';
import TopRatedList from '../TopRatedList';
import { GET } from '../../utils/api';
import styles from './index.module.scss';

const MainSection = ({ propClass }) => {
  const [movieLists, setMovieLists] = useState({});

  useEffect(() => {
    GET('movie', 'popular', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, popular: data.results })));

    GET('movie', 'top_rated', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, topRated: data.results })))
      
    GET('movie', 'upcoming', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, upcoming: data.results })));
  }, []);

  return (
    <div className={`${styles.MainSection} ${styles[propClass]}`}>
      { movieLists.upcoming && <MainCard cardData={ movieLists.upcoming[4] }/> }

      { movieLists.popular && <TopRatedList
                                  title="Most Popular"
                                  cardList={ movieLists.popular }
                                /> }
                                
      { movieLists.topRated && <TopRatedList
                                  title="Top Rated"
                                  cardList={ movieLists.topRated.filter(movie => movie.vote_average >= 8.6) }
                                />}
      
    </div>
  )
}

export default MainSection;