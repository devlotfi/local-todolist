import {
  faCheck,
  faEllipsisH,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Todo } from '@prisma/client';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps): JSX.Element => {
  return (
    <tr>
      <td>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-ghost btn-square"
          >
            <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-[1px] border-base-300 rounded-box w-52"
          >
            <li>
              {todo.completed ? (
                <a>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Mark as not
                  complete
                </a>
              ) : (
                <a className="text-error">
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Mark as
                  complete
                </a>
              )}
            </li>
            <li>
              <a className="text-error">
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete
              </a>
            </li>
          </ul>
        </div>
      </td>
      <td>{todo.title}</td>
      <td>
        {todo.completed ? (
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
        ) : null}
      </td>
    </tr>
  );
};

export default TodoItem;
