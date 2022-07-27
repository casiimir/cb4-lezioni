import './index.css';

const Button = ({btnTextContent="Click", color="ghostwhite", type="button", onHandleClick=(() => {})}) => {
  return (
    <button onClick={onHandleClick} type={type} className="Button" style={{ backgroundColor: color }}>{ btnTextContent }</button>
  )
}

export default Button;