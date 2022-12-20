import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="form__label">
        {label} <span className="form__star">*</span>
      </label>
      <input
        {...field}
        {...props}
        className={`form__input ${
          meta.touched && meta.error ? "form__error" : ""
        }`}
      />
      {meta.touched && meta.error && (
        <p className="form__error--msg">{meta.error}</p>
      )}
    </>
  );
};
export default CustomInput;
