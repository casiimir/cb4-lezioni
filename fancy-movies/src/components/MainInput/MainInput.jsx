import { useState, useEffect, useRef } from 'react';
// import './index.scss';
import styles from './index.module.scss';

const MainInput = () => {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [isInputVisibile, setInputVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
    (window.scrollY >= 900)
      ? setInputVisibility(true)
      : setInputVisibility(false))
    
    // console.log(inputRef.current.value)
    // inputRef.current.focus()
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  }

  const onHandleInput = (e) => setInputValue(e.target.value);

  return (
    <form className={ styles.MainInput } onSubmit={ onHandleSubmit }>
      {
        isInputVisibile && (
          <>
            <input ref={ inputRef } value={ inputValue } onChange={ onHandleInput } type="text" />
            <button type="submit">Search</button>
          </>
        )
      }
    </form>
  )
}

export default MainInput;