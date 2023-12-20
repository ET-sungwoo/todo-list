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
            submitHandler(event);
        }
    };

    const submitHandler = (event) => {
        if (!isEmpty(trim(todoText))) {
            const appendedTodos = sortBy([...todos, {
                id: uuidv4(),
                text: todoText,
                createdAt: new Date()
            }], 'createdAt');
            setTodos(appendedTodos.reverse());
            setTodoText('');
        }
    };

    return (
        <>
            <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Todo </span>
                    </div>
                    <input id="iptTodoValue" type="text" value={todoText} onChange={onTodoTextChangeHandler} onKeyDown={onEnterPressedHandler} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                </label>
                <button onClick={submitHandler} className="btn btn-outline btn-primary">Add Item</button>
            </div>
            {/* Todos */}
            <TodoList todos={todos} />
        </>
    );
}

export default App;
