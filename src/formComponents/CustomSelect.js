import { useField } from "formik";

const CustomSelect = (label, ...props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
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

export default CustomSelect;
