import {
  faCheck,
  faCheckCircle,
  faEllipsisH,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Todo } from '@prisma/client';
import { DELETE_TODO, EDIT_TODO } from '@renderer/react-query/mutations';
import { TODO_LIST } from '@renderer/react-query/queries';
import { cn } from '@renderer/utils/cn';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps): JSX.Element => {
  const queryClient = useQueryClient();
  const { mutate: mutateEdit } = useMutation({
    mutationFn: EDIT_TODO,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [TODO_LIST.name],
      });
    },
  });
  const { mutate: mutateDelete } = useMutation({
    mutationFn: DELETE_TODO,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [TODO_LIST.name],
      });
    },
  });

  return (
    <div className="flex bg-base-200 justify-between items-center mb-[1rem] rounded-xl p-[0.3rem] w-full">
      <div className="flex items-center">
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
                <a
                  onClick={() =>
                    mutateEdit({
                      id: todo.id,
                      completed: false,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Mark as not
                  complete
                </a>
              ) : (
                <a
                  onClick={() =>
                    mutateEdit({
                      id: todo.id,
                      completed: true,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Mark as
                  complete
                </a>
              )}
            </li>
            <li>
              <a
                onClick={() =>
                  mutateDelete({
                    id: todo.id,
                  })
                }
                className="text-error"
              >
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete
              </a>
            </li>
          </ul>
        </div>
        <div
          className={cn(
            'mx-[0.5rem] break-all',
            todo.completed && 'line-through'
          )}
        >
          {todo.title}
        </div>
      </div>

      {todo.completed ? (
        <FontAwesomeIcon
          className="text-primary text-[1.5rem] mr-[0.3rem]"
          icon={faCheckCircle}
        ></FontAwesomeIcon>
      ) : null}
    </div>
  );
};

export default TodoItem;
