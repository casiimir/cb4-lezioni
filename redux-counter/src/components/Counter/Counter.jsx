import { useSelector, useDispatch } from "react-redux"
import './index.css';

const ultraRandom = () => Math.floor(Math.random() * 1000000000);

const Counter = () => {
  const store = useSelector(state => state);
  const { count, user} = store;
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <h2>{ user.userName }</h2>
      <h1>{ count.value }</h1>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'MEGA_ULTRA_BIG_RANDOM', payload: ultraRandom() })}>ß</button>
      <button onClick={() => dispatch({ type: 'SET_USERNAME', payload: 'Casi'})}>Set as Casi</button>
    </div>
  )
}

export default Counter;