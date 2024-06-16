import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@renderer/utils/cn';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().min(2).max(256).required(),
});

interface AddTodoModalProps {
  groupId: string;
}

const AddTodoModal = ({ groupId }: AddTodoModalProps): JSX.Element => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        title: '',
      },
      validationSchema,
      onSubmit(values) {
        console.log(values);
      },
    });

  return (
    <dialog id="add-todo-modal" className="modal">
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
