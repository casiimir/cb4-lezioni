import Button from '../Button';
import './index.css';

// const ImageCard = (props) => {
const ImageCard = ({data}) => {
  return (
    <div className="ImageCard">
      <img className="ImageCard__img" src={data.url} alt={data.name}/>
      <p className="ImageCard__par">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button btnTextCont={data.name}/>
    </div>
  )
}

export default ImageCard;