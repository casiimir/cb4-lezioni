import { useState, useEffect, useRef } from 'react';
import './index.css';

const MainInput = () => {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(inputRef.current.value)
    inputRef.current.focus()
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  }

  const onHandleInput = (e) => setInputValue(e.target.value)

  return (
    <form className="MainInput" onSubmit={onHandleSubmit}>
      <input ref={inputRef} value={inputValue} onChange={onHandleInput} type="text" />
      <button type="submit">Search</button>
    </form>
  )
}

export default MainInput;