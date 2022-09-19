import { useContext } from 'react';
import { ThemeContext } from '../../App';
import AnotherOne from '../AnotherOne';
import './index.css';

const LightBulb = () => {
  const theme = useContext(ThemeContext);
  const onHandleClick = () => theme.setDarkMode(prev => !prev);

  return (
    <div className="LightBulb">
      <img onClick={onHandleClick} src="https://images.vexels.com/media/users/3/145021/isolated/preview/c1dff54d7c4b045853a994c767ba9cae-light-bulb-illustration.png" alt="light bulb" />
      <p>{'Attenzione sono la <LightBulb>'}</p>
      <AnotherOne />
    </div>
  )
}

export default LightBulb;