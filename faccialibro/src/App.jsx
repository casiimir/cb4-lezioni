import Button from './components/Button'
import AddMessage from './components/AddMessage';
import MessageCardList from './components/MessageCardList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__friends"></div>
      <div className="App_messages">
        <AddMessage />
        <MessageCardList/>
      </div>
    </div>
  );
}

export default App;
