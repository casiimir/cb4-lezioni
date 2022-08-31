import MovieEntity from './components/MovieEntity'
import MainSection from './components/MainSection'
import MainInput from './components/MainInput'
import './App.css';

function App() {

  return (
    <div className="App">
      <MainInput />
      <MainSection />
      <MovieEntity movieID="324668"/>
    </div>
  );
}

export default App;
