import { useState } from 'react';

import MainSection from './components/MainSection';
import TvSerieEntity from './components/TvSerieEntity';
import styles from './App.module.scss';

function App() {
  const [cardData, setCardData] = useState({});

  return (
    <div className={ styles.App }>
      <TvSerieEntity cardData={ cardData }/>
      <MainSection setCardData={ setCardData }/>
    </div>
  );
}

export default App;
