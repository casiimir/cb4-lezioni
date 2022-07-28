import { useState, useEffect } from 'react'; 
import FriendCard from '../FriendCard';
import { GET } from '../../utils/api';
import './index.css';

const FriendCardList = () => {
  const [friendList, setFriendList] = useState([]);
  const [isRenderedList, setRenderedList] = useState(false);

  useEffect(() => {
    GET('friends').then(data => setFriendList(data));
  }, [isRenderedList]);

  const obj = {
    name: 'pippo', photo: 'https://randomuser.me/api/portraits/lego/5.jpg'
  }

  return (
    <div className="FriendCardList">
      {
        friendList.length
          ? friendList.map(friend => <FriendCard setRenderedList={setRenderedList} friendData={friend} key={friend.id}/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default FriendCardList;