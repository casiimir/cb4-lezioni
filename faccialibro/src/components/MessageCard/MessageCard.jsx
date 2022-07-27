import { useState } from 'react';
import { DELETE } from '../../utils/api';
import Modal from '../Modal';
import './index.css';

const MessageCard = ({textContent, isRenderedList, onDeleteBtn}) => {
  const [isModalVisibile, setModalVisibility] = useState(false);

  const onModalConfirm = () => {
    DELETE('messages', textContent.id)
      .then(() => onDeleteBtn(!isRenderedList))
  }

  return (
    <div className="MessageCard">
      <button onClick={() => setModalVisibility(true)} className="MessageCard__delete">X</button>
      <p className="MessageCard__text">
        { textContent.text }
      </p>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">
          { textContent.sender }
        </p>
        <p className="MessageCard__info--date">
          { textContent.date }
        </p>
      </div>
      { isModalVisibile && <Modal modalTextContent="Vuoi cancellare il messaggio?" onModalConfirm={onModalConfirm} setModalVisibility={setModalVisibility}/>}
    </div>
  )
}

export default MessageCard;