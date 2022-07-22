import { useState, useEffect } from 'react';
import Card from '../Card';
import './index.css';

const CardList = ({title, BASE_URL, modalVisibility}) => {
  const [seriesList, setSeriesList] = useState([]);

  const removeBrokenSerie = (list, id) => list.filter(serie => serie.id !== id)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setSeriesList(removeBrokenSerie(data, '7b3b3475-8061-4490-a411-6e8498138dae')))
  }, []);

  return (
    <div className="CardList">
      <h1 className="CardList__top">{ title }</h1>
      <div className="CardList__list">
      {
        seriesList.length >= 1 
          ? seriesList.map(serie => <Card data={serie} modalVisibility={modalVisibility} key={serie.id}/>)
          : <p>loading...</p>
      }
      </div>
    </div>
  )
}

export default CardList;