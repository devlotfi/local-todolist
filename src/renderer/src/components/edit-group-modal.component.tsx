import { Group } from '@prisma/client';

interface EditGroupModalProps {
  group: Group;
}

const EditGroupModal = ({ group }: EditGroupModalProps): JSX.Element => {
  return (
    <dialog id={`edit-group-modal-${group.id}`} className="modal">
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

export default EditGroupModal;
