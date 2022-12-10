import { useField } from "formik";

const CustomInput = (label, ...props) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={`form__input ${
          meta.errors && meta.touched ? "form__error" : ""
        }`}
        {meta.errors && meta.touched && (
            <p className="form__error--msg">{meta.errors}</p>
          )}
      />
    </>
  );
};

export default CustomInput;
