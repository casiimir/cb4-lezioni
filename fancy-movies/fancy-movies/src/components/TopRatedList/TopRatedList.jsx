import MainCard from '../MainCard';
import './index.css';

const TopRatedList = ({ title, cardList }) => {

  return (
    <div className="TopRatedList">
      <h1 className="TopRatedList--title">{ title }</h1>
      <div className="TopRatedList--list">
        {
          cardList && cardList.map(movie => (
            <MainCard
              cardData={ movie }
              averageIsVis={ false }
              cardStyle={{ width: '200px', height: '70px', fontSize: '16px' }}
              key={ movie.id }
            />
          ))
        }
      </div>
    </div>
  )
}

export default TopRatedList;