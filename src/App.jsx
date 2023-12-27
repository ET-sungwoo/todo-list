import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import _ from 'lodash';

import classes from './App.module.css';
import TodoList from './TodoList';

function App() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  const addTodoHandler = () => {
    if (!_.isEmpty(todoText)) {
      setTodoList([{ id: uuid(), text: todoText, isEdit: false }, ...todoList]);
      setTodoText('');
    }
  };

  const todoTextChangeHandler = (event) => {
    const enteredText = event.target.value;

    setTodoText(enteredText);
  };

  const deleteHandler = (target) => {
    setTodoList(todoList.filter((x) => x.id !== target.id));
  };

  const editHandler = (target) => {
    const updatedList = todoList.map((x) =>
      x.id === target.id ? { ...target, isEdit: !target.isEdit } : x
    );
    setTodoList(updatedList);
  };

  const changeValueHandler = (e, target) => {
    const updatedList = todoList.map((x) =>
      x.id === target.id ? { ...target, text: e.target.value } : x
    );
    setTodoList(updatedList);
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
        <TodoList
          todos={todoList}
          onClickDelete={deleteHandler}
          onClickEdit={editHandler}
          onChangeValue={changeValueHandler}
        />
      </ul>
    </div>
  );
}

export default App;
