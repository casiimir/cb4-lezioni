import './index.css';

const Modal = ({data, isVisibile, onModalClick}) => {
  return isVisibile && (
    <div className="Modal__overlay">
        <div className="Modal" onClick={() => onModalClick(false)}>
        <img className="Modal__img" src={data.poster} alt={data.title} />
        <h2 className="Modal__header">{data.title}</h2>
        <p className="Modal__desc">{data.description}</p>
      </div>
    </div>
  )
}

export default Modal;