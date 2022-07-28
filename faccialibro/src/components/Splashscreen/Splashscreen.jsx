import { useState } from 'react';
import Button from '../Button';
import './index.css';

const Splashscreen = ({onHandleClick}) => {
  const [usernameInput, setUsernameInput] = useState('');

  const onGetUsername = () => {
    localStorage.setItem('username', usernameInput);
    onHandleClick(false);
  }

  return (
    <div className="Splashscreen">
      <form className="Splashscreen__form" onSubmit={onGetUsername}>
        <h2>Come ti chiami?</h2>
        <input
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="Splashscreen__form--input"
          type="text"
          placeholder="Nome ..."
          required
        />
        <Button type="submit" color="white" btnTextContent="Continua"/>
      </form>
    </div>
  )
}

export default Splashscreen;