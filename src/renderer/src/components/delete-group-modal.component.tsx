import { Group } from '@prisma/client';

interface DeleteGroupModalProps {
  group: Group;
}

const DeleteGroupModal = ({ group }: DeleteGroupModalProps): JSX.Element => {
  return (
    <dialog id={`delete-group-modal-${group.id}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DeleteGroupModal;
