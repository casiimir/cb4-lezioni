import './index.css';

const Button = ({btnTextCont, onHandleClick}) => {
  const renderTxt = (str) => str.toUpperCase();

  return (
    <button
      className="Button"
      onClick={onHandleClick}
    >{ renderTxt(btnTextCont) }</button>
  )
}

export default Button; 