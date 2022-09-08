import TvCard from '../TvCard';

import styles from './index.module.scss';

const TvSeriesList = ({ seriesList, setCardData }) => {
  return (
    <div className={styles.TvSeriesList}>
      { seriesList && seriesList.map(serie => <TvCard cardData={ serie } setCardData={ setCardData } key={ serie.id }/>) }
    </div>
  )
};

export default TvSeriesList;