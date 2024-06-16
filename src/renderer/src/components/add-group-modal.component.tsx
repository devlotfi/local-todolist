import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@renderer/utils/cn';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().min(2).max(256).required(),
});

const AddGroupModal = (): JSX.Element => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
      },
      validationSchema,
      onSubmit(values) {
        console.log(values);
      },
    });

  return (
    <dialog id="add-group-modal" className="modal">
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
