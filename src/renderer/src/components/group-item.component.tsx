import {
  faEllipsisH,
  faFolder,
  faFolderOpen,
  faPen,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Group } from '@prisma/client';
import { cn } from '@renderer/utils/cn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditGroupForm from './edit-group-form.component';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DELETE_GROUP } from '@renderer/react-query/mutations';
import { GROUP_LIST } from '@renderer/react-query/queries';

interface GroupItemProps {
  group: Group;
  selected: boolean;
}

const GroupItem = ({ group, selected }: GroupItemProps): JSX.Element => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: DELETE_GROUP,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [GROUP_LIST.name],
      });
      navigate('/');
    },
  });

  return (
    <div className="flex flex-col w-full items-center mb-[0.5rem] break-all">
      <div className="flex w-full">
        <li className="flex flex-1">
          <div
            onClick={() => navigate(`/${group.id}`)}
            className={cn(
              selected &&
                'text-primary active:!text-primary focus:!text-primary active:!bg-base-300',
              'bg-base-300 p-[0.7rem] px-[1rem]'
            )}
          >
            {selected ? (
              <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
            )}
            {group.name}
            <div className="flex">
              {expanded ? (
                <>
                  <button
                    onClick={() => setEditing(true)}
                    className="btn ml-[0.5rem] btn-sm btn-square"
                  >
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                  </button>
                  <button
                    onClick={() =>
                      mutate({
                        id: group.id,
                      })
                    }
                    className="btn ml-[0.5rem] btn-sm btn-square text-error"
                  >
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                  </button>
                  <button
                    onClick={() => {
                      setExpanded(false);
                      setEditing(false);
                    }}
                    className="btn ml-[0.5rem] btn-sm btn-square"
                  >
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setExpanded(true)}
                  className="btn ml-[0.5rem] btn-sm btn-square"
                >
                  <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </button>
              )}
            </div>
          </div>
        </li>
      </div>
      {editing ? (
        <EditGroupForm setEditing={setEditing} group={group}></EditGroupForm>
      ) : null}
    </div>
  );
};

export default GroupItem;
