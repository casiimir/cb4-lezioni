import { useState } from 'react';
import './index.css';

const Card = ({data, modalVisibility}) => {
  return (
    <div onClick={() => modalVisibility(data)} className="Card">
      <img className="Card__poster" src={data.poster} alt={data.title} />
    </div>
  )
}

export default Card;