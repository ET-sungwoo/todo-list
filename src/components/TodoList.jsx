import TodoItem from "./TodoItem";

function TodoList({ todos=[], removeHandler, updateHandler }) {

  return (
    <ul className="todo-list">
      {
        todos.map((todo) => (
        <TodoItem
            key={todo.id}
          todo={todo}
          removeHandler={removeHandler}
          updateHandler={updateHandler}
        />
      ))
      }
    </ul>
  );
}

export default TodoList;