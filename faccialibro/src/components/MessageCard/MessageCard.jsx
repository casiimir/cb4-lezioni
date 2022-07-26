import { DELETE } from '../../utils/api';
import './index.css';

const MessageCard = ({textContent, isRenderedList, onDeleteBtn}) => {
  const onBtnClick = () => {
    const value = window.confirm('Sicuro di voler cancellare il messaggio?');

    if (value) {
      DELETE('messages', textContent.id)
        .then(() => onDeleteBtn(!isRenderedList))
    }
  }

  return (
    <div className="MessageCard">
      <button onClick={onBtnClick} className="MessageCard__delete">X</button>
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
    </div>
  )
}

export default MessageCard;