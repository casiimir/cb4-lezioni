import './index.css';

const FriendCard = ({ friendData }) => {
  const { photo, name } = friendData;

  return (
    <div className="FriendCard">
      <img className="FriendCard__photo" src={ photo } alt={ name } />
      <p className="FriendCard__name">{ name }</p>
    </div>
  )
}

export default FriendCard;