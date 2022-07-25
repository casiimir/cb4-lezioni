import './index.css';

const Button = ({textContent, color, type}) => {
  return (
    <button type={ type } className="Button" style={{ backgroundColor: color }}>{ textContent }</button>
  )
}

export default Button;