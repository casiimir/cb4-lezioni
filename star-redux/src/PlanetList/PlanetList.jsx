import { GET } from '../utils/api';
import { useState, useEffect } from 'react';
import Planet from '../Planet';
import styles from './index.module.scss';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    GET('planets').then(data => setPlanets(data.results.filter(el => el.diameter <= 10300)))
  }, []);

  return (
    <div className={styles.PlanetList}>
      { planets && planets.map(planetData => <Planet planetData={planetData} key={planetData.diameter} />)}
    </div>
  )
}

export default PlanetList