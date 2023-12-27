import TodoItem from './TodoItem';

function TodoList({ todos = [], removeHandler, updateHandler }) {
  return (
    <div className="flex flex-col items-center justify-center w-96">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeHandler={removeHandler}
            updateHandler={updateHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
