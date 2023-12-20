
const deleteIconPath = `${process.env.PUBLIC_URL}/images/svg/x-symbol-svgrepo-com.svg`;
const editIconPath = `${process.env.PUBLIC_URL}/images/svg/edit-svgrepo-com.svg`;

/**
 * TodoItem 컴포넌트는 할 일 나타냅니다.
 *
 * @component
 * @param {string?} key todo item id
 * @param {{id: string, text: string, createdAt: Date}} todo 할 일 항목
 * @returns {JSX.Element|null}
 */
function TodoItem({ key, todo }) {
  return <>
      <li key={key || todo.id}>
          <div>
              <span>{todo.text}</span>
              <img src={deleteIconPath} alt="delete todo item icon" />
          </div>
      </li>
  </>;
}

export default TodoItem;
