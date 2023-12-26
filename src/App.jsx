import {useState} from 'react';

import TodoList from './components/TodoList';
import {v4 as uuidv4} from 'uuid';
import {isEmpty, trim, sortBy} from "lodash-es";

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
            const now = new Date();
            const appendedTodos = sortBy([...todos, {
                id: uuidv4(),
                text: todoText,
                completed: false,
                createdAt: now,
                updatedAt: now,
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
                            updatedAt: new Date(),
                        };
                    }
                    return todo;
                });
            });
    }

    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="flex px-5 py-5">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-gray-70 text-xl font-bold">
                        Todo List
                    </h2>
                    {/*<p>Join 5,000+ others and never miss out on new tips, tutorials, and more.</p>*/}
                    <div className="flex flex-col gap-3 md:flex-row">
                        <div className="form-control flex-grow">
                            <input
                                id="iptTodoValue"
                                type="text"
                                name="todoValue"
                                placeholder="Type here"
                                className="input input-bordered flex-grow"
                                value={todoText}
                                onChange={onTodoTextChangeHandler}
                                onKeyUp={onEnterPressedHandler}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={appendTodos}>Add</button>
                    </div>
                </div>
            </div>
            <div className="divider" />
            {/* Todos */}
            <TodoList todos={todos} removeHandler={removeTodoById} updateHandler={updateTodoById} />
        </div>
    );
}

export default App;
