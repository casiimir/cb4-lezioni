import { useState } from 'react';
import AddMessage from './components/AddMessage';
import FriendCardList from './components/FriendCardList';
import MessageCardList from './components/MessageCardList';
import './App.css';

function App() {
  const [isRenderedList, setRenderedList] = useState(false);

  return (
    <div className="App">
      <div className="App__friends">
        <h3>Lista degli amici</h3>
        <FriendCardList />
      </div>
      <div className="App_messages">
        <AddMessage isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>
        <MessageCardList isRenderedList={ isRenderedList } setRenderedList={setRenderedList}/>
      </div>
    </div>
  );
}

export default App;