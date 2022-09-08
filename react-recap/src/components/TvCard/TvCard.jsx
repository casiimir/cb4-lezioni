import { memo } from 'react';
import styles from './index.module.scss';

const TvCard = ({ cardData, setCardData }) => {

  const { name, vote_average, first_air_date} = cardData;

  return (
    <div className={styles.TvCard} onClick={() => setCardData(cardData)}>
      <h1 className={styles.title}>{ name }</h1>
      <p className={styles.date}>{ first_air_date }</p>
      <p className={styles.average}>{ vote_average }</p>
    </div>
  )
};

export default memo(TvCard);