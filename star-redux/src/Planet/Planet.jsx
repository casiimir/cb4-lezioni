import { useSelector, useDispatch } from "react-redux";

import styles from './index.module.scss';

const Planet = ({ planetData }) => {
  const dispatch = useDispatch();
  const { name, terrain, population, diameter, climate } = planetData;

  const onHandleModal = () => {
    dispatch({ type: 'SET_MODAL_VISIBLE' });
    dispatch({ type: 'SET_MODAL_DATA', payload: planetData });
  }

  return (
    <div className={styles.Planet} onClick={onHandleModal}>
      <h3>{name}</h3>
      <p className={styles.description}>{terrain}</p>
      <p className={styles.population}>{population}</p>
      <p className={styles.diameter}>{diameter}</p>
      <p className={styles.climate}>{climate}</p>
    </div>
  )
}

export default Planet