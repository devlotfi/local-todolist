import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Group } from '@prisma/client';
import { cn } from '@renderer/utils/cn';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().min(2).max(256).required(),
});

interface EditGroupFormProps {
  group: Group;
  setEditing: (value: boolean) => void;
}

const EditGroupForm = ({
  setEditing,
  group,
}: EditGroupFormProps): JSX.Element => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: group.name,
      },
      validationSchema,
      onSubmit(values) {
        console.log(values);
      },
    });

  return (
    <form className="w-full mt-[0.5rem]" onSubmit={handleSubmit}>
      <div className="form-control">
        <label
          className={cn(
            errors.name && touched.name && 'input-error',
            `input input-sm input-bordered flex items-center gap-2`
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

      <div className="flex">
        <button
          className="btn mr-[0.5rem] btn-outline btn-sm mt-[0.5rem] flex-1"
          onClick={() => setEditing(false)}
          type="button"
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Cancel
        </button>
        <button
          className="btn btn-primary btn-sm mt-[0.5rem] flex-1"
          type="submit"
        >
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Edit group
        </button>
      </div>
    </form>
  );
};

export default EditGroupForm;
