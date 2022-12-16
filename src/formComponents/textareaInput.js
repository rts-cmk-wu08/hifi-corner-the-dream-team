import { useField } from "formik";

const TextareaInput = ({ label, ...props }) => {
  const [field, meta, error] = useField(props);
  return (
    <>
      <label htmlFor="message" className="form__label">
        {label}
        <span className="form__star">*</span>
      </label>
      <textarea
        {...field}
        {...props}
        className={`form__input ${
          meta.touched && meta.error ? "form__error" : ""
        }`}
      ></textarea>
      {meta.touched && meta.error && (
        <p className="form__error--msg">{error}</p>
      )}
    </>
  );
};

export default TextareaInput;
