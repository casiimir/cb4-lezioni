import { DELETE } from '../../utils/api';
import './index.css';

const FriendCard = ({ friendData, setRenderedList }) => {
  const { photo, name, id } = friendData;

  const onHandleDelete = (id) =>
    DELETE('friends', id)
      .then(() => setRenderedList(prev => !prev))

  return (
    <div className="FriendCard">
      <img className="FriendCard__photo" src={ photo } alt={ name } />
      <p className="FriendCard__name">{ name }</p>
      <button onClick={() => onHandleDelete(id)} className="FriendCard__btn">X</button>
    </div>
  )
}

export default FriendCard;