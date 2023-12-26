import {useState} from "react";
import {XMarkIcon, PencilIcon} from "@heroicons/react/16/solid";

/**
 * TodoItem 컴포넌트는 할 일 나타냅니다.
 *
 * @component
 * @param {string?} key todo item id
 * @param {{id: string, text: string, completed: boolean, createdAt: Date, updatedAt: Date}} todo 할 일 항목
 * @returns {JSX.Element|null}
 */
function TodoItem({todo, removeHandler, updateHandler}) {
    const [isEditing, setEditing] = useState(false);
    const [todoText, setTodoText] = useState(todo.text);

    const completeHandler = () => {
        updateHandler(todo.id, {...todo, completed: !todo.completed, text: todoText});
    };

    const todoEditToggle = () => {
        setEditing((editState) => !editState);
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

    return (
        <li key={todo.id}>
            <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
                {/** Card Body */}
                <div className="h-full w-full pb-6 bg-base-100 flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={completeHandler}
                        className="form-checkbox checkbox checkbox-primary"
                    />
                    {
                        isEditing
                            ? <input type="text" value={todoText} onChange={onTodoEdit} onKeyUp={onEnterPressedHandler}/>
                            : <span className={todo.completed ? 'line-through' : ''}>{todoText}</span>
                    }
                    <PencilIcon
                        className="transition ease-in-out h-5 w-5 text-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300"
                        onClick={todoEditToggle}/>
                    <XMarkIcon
                        className="transition ease-in-out h-5 w-5 text-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300"
                        onClick={() => removeHandler(todo.id)}/>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;
