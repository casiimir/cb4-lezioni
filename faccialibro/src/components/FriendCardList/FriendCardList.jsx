import { useState, useEffect } from 'react'; 
import FriendCard from '../FriendCard';
import { GET } from '../../utils/api';
import './index.css';

const FriendCardList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET('friends').then(data => setFriendList(data));
  }, []);

  const obj = {
    name: 'pippo', photo: 'https://randomuser.me/api/portraits/lego/5.jpg'
  }

  return (
    <div className="FriendCardList">
      {
        friendList.length
          ? friendList.map(friend => <FriendCard friendData={friend} key={friend.id}/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default FriendCardList;