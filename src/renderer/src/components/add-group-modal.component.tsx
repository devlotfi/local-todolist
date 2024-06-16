import { faInfoCircle, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ADD_GROUP } from '@renderer/react-query/mutations';
import { GROUP_LIST } from '@renderer/react-query/queries';
import { cn } from '@renderer/utils/cn';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().min(2).max(256).required(),
});

const AddGroupModal = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const queryClient = useQueryClient();
  const { mutate, error, isError } = useMutation({
    mutationFn: ADD_GROUP,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [GROUP_LIST.name],
      });
      modalRef.current?.close();
    },
  });
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
      },
      validationSchema,
      onSubmit(values) {
        mutate({
          name: values.name,
        });
      },
    });

  return (
    <dialog ref={modalRef} id="add-group-modal" className="modal">
      <div className="modal-box">
        <h3 className="mb-[1rem] font-bold text-lg">
          <FontAwesomeIcon
            className="text-primary mr-[0.5rem]"
            icon={faPlus}
          ></FontAwesomeIcon>
          Add group
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label
              className={cn(
                errors.name && touched.name && 'input-error',
                `input input-bordered flex items-center gap-2`
              )}
            >
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            {errors.name && touched.name ? (
              <div className="label">
                <span className="label-text-alt text-error">{errors.name}</span>
              </div>
            ) : null}
          </div>
          {isError ? (
            <div role="alert" className="alert alert-error mt-[0.5rem]">
              <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
              <span>{error.message}</span>
            </div>
          ) : null}

          <button className="btn btn-primary mt-[1rem] w-full" type="submit">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add group
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddGroupModal;
