import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Componente1 = () => {
  const theme = useContext(ThemeContext);
  
  return (
    <div className="Componente1">
      <h1>{ !theme.isDarkMode ? 'False' : 'True' }</h1>
      <p>{'Attenzione sono il <Componente1>'}</p>
    </div>
  )
}

export default Componente1;