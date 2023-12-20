import { useState } from 'react';

import classes from './App.module.css';
import TodoList from './TodoList';

function App() {
  const addTodoHandler = () => {
    console.log('Load addTodoHandler');
  };

  const [todoText, setTodoText] = useState('');

  const todoTextChangeHandler = (event) => {
    const enteredText = event.target.value;

    /* 
        유효성 검사 로직을 추가할 수도 있습니다. (꼭 안 해도 됨) 
    */

    setTodoText(enteredText);
  };

  return (
    <div className="form container">
      <div className={classes.form}>
        <label htmlFor="text">투두 리스트</label>
        <input type="text" id="text" value={todoText} onChange={todoTextChangeHandler} />
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>
      {/* Todos */}
      <ul className={classes.todos}>
        {/* TodoItem */}
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
