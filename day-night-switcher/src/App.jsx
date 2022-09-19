import { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import LightBulb from './components/LightBulb';
import AnotherOne from './components/AnotherOne';

const theme = {
  lightMode: {
    background: '#fff',
    color: '#1b1b1b',
  },
  darkMode: {
    background: '#1b1b1b',
    color: '#fff',
  }
}

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const darkModeStuff = {
    isDarkMode,
    setDarkMode
  }

  return (
    <div className="App" style={ isDarkMode ? theme.darkMode : theme.lightMode } >
      <ThemeContext.Provider value={ darkModeStuff }>
        <LightBulb />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
