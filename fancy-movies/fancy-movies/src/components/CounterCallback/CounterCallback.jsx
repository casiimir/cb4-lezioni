import { useState, useCallback } from 'react';

const functions = new Set();

const CounterCallback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // Standard functions
  // const onIncrement = () => setCount(count + 1);
  // const onDecrement = () => setCount(count - 1);
  // const onNumIncrement = () => setNumber(number + 1)
  
  // useCallback functions
  const onIncrement = useCallback(() => {
    setCount(count + 1)
    console.log('Increase');
  }, [count]);

  const onDecrement = useCallback(() => {
    setCount(count - 1)
    console.log('Decrease');
  }, [count]);

  const onNumIncrement = useCallback(() => {
    setNumber(number + 1)
    console.log('Num Increment');
  }, [number]);

  functions.add(onIncrement);
  functions.add(onDecrement);
  functions.add(onNumIncrement);
  console.log(functions.size)

  return (
    <div className="CounterCallbaclk">
      <h1>{ count }</h1>
      <button onClick={ onIncrement }>Increase</button>
      <button onClick={ onDecrement } >Decrease</button>
      <button onClick={ onNumIncrement } >increase number</button>
    </div>
  )
}

export default CounterCallback;