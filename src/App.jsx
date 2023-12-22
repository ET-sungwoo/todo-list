import {useState} from 'react';

import TodoList from './components/TodoList';
import {v4 as uuidv4} from 'uuid';
import {chain, isEmpty, trim, sortBy} from "lodash-es";

function App() {

    const [todoText, setTodoText] = useState('');
    const [todos, setTodos] = useState([]);

    const onTodoTextChangeHandler = (event) => {
        setTodoText(event.target.value);
    };

    const onEnterPressedHandler = (event) => {
        if (event.key === 'Enter') {
            appendTodos(event);
        }
    };

    const appendTodos = () => {
        if (!isEmpty(trim(todoText))) {
            const appendedTodos = sortBy([...todos, {
                id: uuidv4(),
                text: todoText,
                completed: false,
                createdAt: new Date()
            }], 'createdAt');
            setTodos(appendedTodos.reverse());
            setTodoText('');
        }
    };

    const removeTodoById = (id) => {
            setTodos((oldTodos) => {
                return (oldTodos || []).filter(todo => todo.id !== id);
            });
    };

    const updateTodoById = (id, todoObj) => {
            setTodos((oldTodos) => {
                return (oldTodos || []).map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            ...todoObj,
                            id: todo.id,
                        };
                    }
                    return todo;
                });
            });
    }

    return (
        <>
            <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Todo </span>
                    </div>
                    <input id="iptTodoValue" type="text" value={todoText} onChange={onTodoTextChangeHandler} onKeyUp={onEnterPressedHandler} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                </label>
                <button onClick={appendTodos} className="btn btn-outline btn-primary">Add Item</button>
            </div>
            {/* Todos */}
            <TodoList todos={todos} removeHandler={removeTodoById} updateHandler={updateTodoById} />
        </>
    );
}

export default App;
