import { useState } from 'react';

import MovieEntity from './components/MovieEntity'
import MainSection from './components/MainSection'
import MainInput from './components/MainInput'
import Navbar from './components/Navbar'
// import TodoApp from './components/TodoApp'
import './App.scss';

function App() {
  const colorBtns = [
    {
      design: "darkgray",
      id: 0,
    },
    {
      design: "lightskyblue",
      id: 1,
    },
    {
      design: "lightgreen",
      id: 2,
    },
    {
      design: "darkslateblue",
      id: 3,
    },
    {
      design: "orange",
      id: 4
    }
  ]

  const [dycClass, setDycClass] = useState(colorBtns[0].design);

  return (
    <div className="App">
      <Navbar />
      <MainInput />
      <div className="buttons">
        { colorBtns.map(color => <button style={{ backgroundColor: color.design }} onClick={() => setDycClass(color.design)} key={color.id}>{ color.design }</button>) }
      </div>
      <MainSection propClass={ dycClass }/>
      <MovieEntity movieID="324668"/>
      {/* <TodoApp /> */}
    </div>
  );
}

export default App;