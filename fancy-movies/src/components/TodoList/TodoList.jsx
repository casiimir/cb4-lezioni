import { memo, useState, useMemo } from 'react';
import './index.css';

const fattorialeDi = (n) => {
  console.log('La funzione fattoriale è stata chiamata');
  return (n <= 0 ? 1 : n * fattorialeDi(n  - 1));
}

const TodoList = ({ data }) => {
  // alert('RENDERING');
  const [number, setNumber] = useState(1);  // <-- RIMUOVERE! nel caso di memo 
  const [increment, setIncrement] = useState(0);  // <-- RIMUOVERE! nel caso di memo

  const fattoriale = useMemo(() => fattorialeDi(number), [number]); // <-- RIMUOVERE! nel caso di memo
  // const fattoriale = () => fattorialeDi(number);

  return (
    <div className="TodoList">
      <h2>Todo List</h2>
      { data.map((todo, i) => <p key={ i }>{ todo }</p>) }
      {/* Logica del useMemo */}
      <hr />
      <div className="useMemo">  { /* <-- RIMUOVERE! nel caso di memo */ }
        <span>Fattoriale di </span>
        <input type="text" value={ number } onChange={ (e) => setNumber((Number(e.target.value))) }/> { number }
        <h3>Il fattoriale equivale a { fattoriale }</h3>
        <button onClick={ () => setIncrement(prev => prev + 1) } >Rendering / Increment</button>
        <hr />
      </div>
    </div>
  )
}

export default TodoList;
// export default memo(TodoList); // memo