import { useState, useEffect } from 'react';
import TvSeriesList from '../TvSeriesList'
import { GET } from '../../utils/api.js';
import styles from './index.module.scss';

const MainSection = ({ setCardData }) => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    GET('tv', 'popular', '&language=en-US&page=1').then(data => setSeriesData(data));
  }, []);

  return (
    <div className={styles.MainSection}>
      <TvSeriesList seriesList={ seriesData.results } setCardData={ setCardData }/>
    </div>
  )
}

export default MainSection;