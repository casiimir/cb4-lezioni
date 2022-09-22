import { memo } from 'react';
import styles from './index.module.scss';

const Modal = ({ data }) => {
  const { name, terrain, population, diameter, climate, rotation_period, url, gravity } = data;
  console.log(data)
  return (
    <div className={styles.Modal}>
      <h3>{name}</h3>
      <p className={styles.description}>{terrain}</p>
      <p className={styles.population}>{population}</p>
      <p className={styles.diameter}>{diameter}</p>
      <p className={styles.climate}>{climate}</p>
      <p className={styles.rotation_period}>{rotation_period}</p>
      <p className={styles.url}>{url}</p>
      <p className={styles.gravity}>{gravity}</p>
    </div>
  )
}

export default memo(Modal);