import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TodoItem from '@renderer/components/todo-item.component';
import { useParams } from 'react-router-dom';

const TodoList = (): JSX.Element => {
  const { groupId } = useParams();

  return (
    <div className="flex flex-col flex-1 p-[1.5rem]">
      <div className="flex text-[20pt] items-center font-bold">
        <FontAwesomeIcon
          className="mr-[0.5rem] text-primary"
          icon={faList}
        ></FontAwesomeIcon>{' '}
        Todolist
      </div>

      <div className="overflow-x-auto h-full">
        <table className="table table-zebra flex-1">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            <TodoItem
              todo={{
                groupId: 'lola',
                title: 'lol',
                completed: true,
                id: 'tol',
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                groupId: 'lola',
                title: 'lol',
                completed: true,
                id: 'tol',
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                groupId: 'lola',
                title: 'lol',
                completed: true,
                id: 'tol',
              }}
            ></TodoItem>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
