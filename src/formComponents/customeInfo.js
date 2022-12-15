import { useField } from "formik";

const CustomInfo = (label, ...props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={`form__input ${
          meta.error && meta.touched ? "form__error" : ""
        }`}
      />
      {meta.error && meta.touched && (
        <p className="form__error--msg">{meta.error}</p>
      )}
    </>
  );
};

export default CustomInfo;
