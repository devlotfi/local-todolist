import {
  faEllipsisH,
  faFolder,
  faFolderOpen,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Group } from '@prisma/client';
import { cn } from '@renderer/utils/cn';
import { useNavigate } from 'react-router-dom';
import EditGroupModal from './edit-group-modal.component';
import DeleteGroupModal from './delete-group-modal.component';

interface GroupItemProps {
  group: Group;
  selected: boolean;
}

const GroupItem = ({ group, selected }: GroupItemProps): JSX.Element => {
  const navigate = useNavigate();

  const showEditGroupModal = (): void => {
    const modal = document.getElementById(
      `edit-group-modal-${group.id}`
    ) as HTMLDialogElement;
    modal.showModal();
  };
  const showDeleteGroupModal = (): void => {
    const modal = document.getElementById(
      `delete-group-modal-${group.id}`
    ) as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <>
      <div className="flex w-full items-center">
        <EditGroupModal group={group}></EditGroupModal>
        <DeleteGroupModal group={group}></DeleteGroupModal>
        <li className="flex flex-1">
          <div
            onClick={() => navigate(`/${group.id}`)}
            className={cn(
              selected && 'text-primary',
              'bg-base-300 p-[0.7rem] px-[1rem]'
            )}
          >
            {selected ? (
              <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
            )}
            {group.name}
          </div>
        </li>
        <div className="dropdown dropdown-end">
          <button className="btn btn-sm btn-square ml-[0.5rem]">
            <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-l-[1px] border-base-300 rounded-box w-52"
          >
            <li>
              <a onClick={() => showEditGroupModal()}>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Edit
              </a>
            </li>
            <li>
              <a
                onClick={() => showDeleteGroupModal()}
                className="text-error active:text-error"
              >
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GroupItem;
