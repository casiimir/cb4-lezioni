import ImageCard from '../ImageCard'
import galleryMock from '../../assets/galleryMock';
import './index.css';

const Gallery = ({visibility}) => {
  console.log('visibility', visibility)
  return (
    <div className="Gallery">
      { visibility ? (
        <>
          <h2 className="Gallery__header">Gallery</h2>
          <div className="Gallery__content">
            {
              galleryMock.map(image => <ImageCard key={image.id} data={image}/>)
            }
          </div>
        </>
      ): <h2>Nascosto!!!</h2>}
    </div>
  )
}

export default Gallery;