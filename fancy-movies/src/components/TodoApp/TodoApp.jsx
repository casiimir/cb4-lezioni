import { useState } from 'react';
import TodoList from '../TodoList';

const TodoApp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Pane", "Latte"]);
  const [inputValue, setInputValue] = useState("");

  const onIncrement = () => setCount(prev => prev + 1);

  const onAddTodo = () => setTodos(prev => [...prev, inputValue]);

  return (
    <div className="TodoApp">
      <TodoList data={ todos } />
      <h2>{ count }</h2>
      <button onClick={ onIncrement }>Increment count</button>

      <input value={ inputValue } onChange={ (e) => setInputValue(e.target.value) } type="text" />
      <button onClick={ onAddTodo }>Add</button>
    </div>
  )
}

export default TodoApp;