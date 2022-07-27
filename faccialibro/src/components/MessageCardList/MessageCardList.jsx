import { useState, useEffect } from 'react';
import Button from '../Button';
import MessageCard from '../MessageCard';
import { GET } from '../../utils/api';
import './index.css';

const MessageCardList = ({ isRenderedList, setRenderedList }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
      GET('messages').then((data) => setMessageList(data));
  }, [isRenderedList]);

  return (
    <div className="MessageCardList">
      <Button btnTextContent="Update list" onHandleClick={() => setRenderedList(!isRenderedList)}/>
      {
        messageList.length
          ? messageList.map(message => <MessageCard isRenderedList={isRenderedList} onDeleteBtn={setRenderedList} textContent={ message } key={ message.id }/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;