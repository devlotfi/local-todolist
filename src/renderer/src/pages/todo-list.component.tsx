import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddTodoModal from '@renderer/components/add-todo-modal.component';
import TodoItem from '@renderer/components/todo-item.component';
import { useParams } from 'react-router-dom';
import NoData from '../assets/svg/no-data.svg';
import { useQuery } from '@tanstack/react-query';
import { TODO_LIST } from '@renderer/react-query/queries';

const TodoList = (): JSX.Element => {
  const { groupId } = useParams();
  const { data } = useQuery({
    queryFn: TODO_LIST,
    queryKey: ['TODO_LIST', { groupId: groupId! }],
  });

  const showAddTodoModal = (): void => {
    const modal = document.getElementById(
      'add-todo-modal'
    ) as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <div className="flex flex-col flex-1 p-[1.5rem]">
      <AddTodoModal groupId={groupId!}></AddTodoModal>
      <div className="flex sticky top-0 bg-base-100 z-[1] py-[1rem] justify-between">
        <div className="flex text-[20pt] items-center font-bold">
          <FontAwesomeIcon
            className="mr-[0.5rem] text-primary"
            icon={faList}
          ></FontAwesomeIcon>
          Todolist
        </div>

        <button
          onClick={() => showAddTodoModal()}
          type="button"
          className="btn btn-primary btn-square btn-circle"
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>

      <div className="flex flex-col mt-[1rem]">
        {data?.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)}
      </div>

      {data && data.length < 1 ? (
        <div className="flex flex-1 flex-col justify-center  items-center">
          <img className="h-[10rem] my-[1.5rem]" src={NoData} alt="no-data" />
          <div className="flex text-[15pt]">No data</div>
        </div>
      ) : null}
    </div>
  );
};

export default TodoList;
