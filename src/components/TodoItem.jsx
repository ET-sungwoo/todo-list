import {useState} from "react";
import { XMarkIcon, PencilIcon } from "@heroicons/react/16/solid";

const deleteIconPath = `${process.env.PUBLIC_URL}/images/svg/x-symbol-svgrepo-com.svg`;
const editIconPath = `${process.env.PUBLIC_URL}/images/svg/edit-svgrepo-com.svg`;

/**
 * TodoItem 컴포넌트는 할 일 나타냅니다.
 *
 * @component
 * @param {string?} key todo item id
 * @param {{id: string, text: string, completed: boolean, createdAt: Date}} todo 할 일 항목
 * @returns {JSX.Element|null}
 */
function TodoItem({ todo, removeHandler, updateHandler }) {
  const [isEditing, setEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
  const completeHandler = () => {
    updateHandler(todo.id, {...todo, completed : !todo.completed, text: todoText});
  };

  const todoEditToggle = () => {
      setEditing((oldState) => !oldState);
  };

  const updateTodoText = (value) => {
      setTodoText(value);
      updateHandler(todo.id, {...todo, text: todoText});
  };

  const onTodoEdit = (event) => {
      updateTodoText(event.target.value);
  };

    const onEnterPressedHandler = (event) => {
        if (event.key === 'Enter') {
            updateTodoText(event.target.value);
            todoEditToggle();
        }
    };

  return <>
      <li key={todo.id}>
          <div className="p-4">
              <label className="flex items-center space-x-2">
                  <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => completeHandler(todo.id, todo)}
                      className="form-checkbox"
                  />
                  {
                      isEditing ? <input type="text" value={todoText} onChange={onTodoEdit} onKeyUp={onEnterPressedHandler} /> : <span className={todo.completed ? 'line-through' : ''}>{todoText}</span>
                  }
                  <PencilIcon className="h-5 w-5 text-blue-500" onClick={todoEditToggle} />
                  <XMarkIcon className="h-5 w-5 text-blue-500" onClick={() => removeHandler(todo.id)} />
              </label>
          </div>
      </li>
  </>;
}

export default TodoItem;
