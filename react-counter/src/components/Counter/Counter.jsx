import { useState } from 'react';
import './index.css';

const Counter = ({defaultValue}) => {
  let [value, setValue] = useState(defaultValue);

  const increment = () => setValue(value + 1);

  return (
    <div className="Counter">
      <h3 className="Counter__header"> { value } </h3>
      <button
        onClick={increment}
        className="Counter__increment"
      >Incrementa</button>
    </div>
  )
}

export default Counter;