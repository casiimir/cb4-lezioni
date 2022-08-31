import { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const valueRef = useRef(0);
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   console.log(value);
  // }, [value])

  const onHandleClick = () => {
    // setValue(prev => prev + 1);
    valueRef.current++;

    const timer = setInterval(() => {
      console.log(valueRef.current);
    }, 500);
  };

  return (
    <div>
      <h1>{ valueRef.current }</h1>
      <button onClick={onHandleClick}>Incrementa</button>
    </div>
  )
}

export default Counter;