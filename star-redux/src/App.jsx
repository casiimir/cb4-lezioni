import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
import PlanetList from './PlanetList';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const isModalVisibile = useSelector(state => state.isModalVisibile)
  const modalData = useSelector(state => state.modalData)

  return (
    <div className={styles.App}>
      <PlanetList />
      { isModalVisibile && <>
        <div onClick={() => dispatch({ type: 'SET_MODAL_INVISIBLE' })} className={styles.overlay}></div>
        <Modal data={modalData} />
      </>
      }
    </div>
  );
}

export default App;
