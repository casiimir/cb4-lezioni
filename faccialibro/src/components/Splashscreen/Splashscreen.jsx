import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import Button from '../Button';
import './index.css';

const Splashscreen = ({onHandleClick}) => {
  const [usernameInput, setUsernameInput] = useState('');

  const onGetUsername = () => {
    localStorage.setItem('username', usernameInput);
    onHandleClick(false);
  }

  const friendList = [
    {
      original: "https://c.tenor.com/b-LaYMKhf9gAAAAd/crash-sad.gif",
      originalHeight: 100,
      originalAlt: 'crash-sad',
      originalClass: 'Splashscreen__gallery--img'
    },
    {
      original: "https://data.whicdn.com/images/71703615/original.gif",
      originalHeight: 100,
      originalAlt: 'crash-original',
      originalClass: 'Splashscreen__gallery--img'
    },
    {
      original: "https://thumbs.gfycat.com/CraftyShimmeringItaliangreyhound-max-1mb.gif",
      originalHeight: 100,
      originalAlt: 'crash-bo',
      originalClass: 'Splashscreen__gallery--img'
    },
  ]

  return (
    <div className="Splashscreen">
      <ImageGallery items={friendList} showFullscreenButton={false} showPlayButton={false} additionalClass={'Splashscreen__gallery'} autoPlay={true} slideInterval={500}/>

      <form className="Splashscreen__form" onSubmit={onGetUsername}>
        <h2>Come ti chiami?</h2>
        <input
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="Splashscreen__form--input"
          type="text"
          placeholder="Nome ..."
          required
        />
        <Button type="submit" color="white" btnTextContent="Continua"/>
      </form>
    </div>
  )
}

export default Splashscreen;