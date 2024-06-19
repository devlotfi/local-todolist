import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ADD_TODO } from '@renderer/react-query/mutations';
import { TODO_LIST } from '@renderer/react-query/queries';
import { cn } from '@renderer/utils/cn';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().min(2).max(256).required(),
});

interface AddTodoModalProps {
  groupId: string;
}

const AddTodoModal = ({ groupId }: AddTodoModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ADD_TODO,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [TODO_LIST.name],
      });
      resetForm();
      modalRef.current?.close();
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema,
    onSubmit(values) {
      mutate({
        groupId,
        title: values.title,
      });
    },
  });

  return (
    <dialog ref={modalRef} id="add-todo-modal" className="modal">
      <div className="modal-box">
        <h3 className="mb-[1rem] font-bold text-lg">
          <FontAwesomeIcon
            className="text-primary mr-[0.5rem]"
            icon={faPlus}
          ></FontAwesomeIcon>
          Add todo
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label
              className={cn(
                errors.title && touched.title && 'input-error',
                `input input-bordered flex items-center gap-2`
              )}
            >
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            {errors.title && touched.title ? (
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.title}
                </span>
              </div>
            ) : null}
          </div>

          <button className="btn btn-primary mt-[1rem] w-full" type="submit">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add todo
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddTodoModal;
