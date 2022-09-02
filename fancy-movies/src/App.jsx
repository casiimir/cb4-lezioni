import MovieEntity from './components/MovieEntity'
import MainSection from './components/MainSection'
import MainInput from './components/MainInput'
import Navbar from './components/Navbar'
// import TodoApp from './components/TodoApp'
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <MainInput />
      <MainSection />
      <MovieEntity movieID="324668"/>
      {/* <TodoApp /> */}
    </div>
  );
}

export default App;
