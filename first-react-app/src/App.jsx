import './App.css';
import Title from './components/Title';
import { trimStr, printName } from './utils';
import { min } from 'lodash';

const App = () => {
  const name = trimStr(' Edgemony      ');
  const myList = [2343,43,223,1,11,21,3,4,34,3434,0.434];

  return (
    <div className="App">
      <h1 className={name}>
        { name }
      </h1>
      <Title />
      <p>Il numero più piccolo è: { min(myList) }</p>
    </div>
  );
}

export default App;