import classes from './App.module.css';
import XSymbolLogo from './x-symbol-svgrepo-com.svg';
import EditButtonLogo from './edit-button-svgrepo-com.svg';
import {useEffect, useState} from "react";

/**
 * TodoList 컴포넌트는 할 일 목록을 나타냅니다.
 *
 * @component
 * @param {Object[]} props.todos - 할 일 항목들을 담은 배열.
 * @param {string} props.todos[].id - 할 일 항목의 고유 식별자.
 * @param {string} props.todos[].text - 할 일 항목의 텍스트 내용.
 * @returns {JSX.Element|null} 할 일 목록이 있는 경우 목록을, 그렇지 않은 경우 null을 반환합니다.
 */
function TodoList({ todos = [], onClickDelete, onClickEdit, onChangeValue }) {

    const deleteHandler = (target) => {
        onClickDelete(target);
    }

    const editHandler = (target) => {
        onClickEdit(target);
    }

    const changeHandler = (e, target) => {
        onChangeValue(e, target);
    }

    if (todos.length === 0) return null;
    return todos.map((item) => (
        <li key={item.id} className={classes.item}>
            <div className={classes.list_container}>
                {
                    item.isEdit
                    ? <input type='text' value={item.text} onChange={e => changeHandler(e, item)} className={classes.input_text}/>
                    : <span className={classes.span_value}>{item.text}</span>
                }
                <img className={classes.list_logo} src={EditButtonLogo} alt="React Logo" onClick={() => editHandler(item)} />
                <img className={classes.list_logo} src={XSymbolLogo} alt="React Logo" onClick={() => deleteHandler(item)} />
            </div>
        </li>
    ));
}

export default TodoList;
