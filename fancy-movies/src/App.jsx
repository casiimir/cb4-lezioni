import MovieEntity from './components/MovieEntity'
import MainInput from './components/MainInput'
import './App.css';

function App() {

  return (
    <div className="App">
      <MainInput />
      <MovieEntity movieID="324668"/>
    </div>
  );
}

export default App;
