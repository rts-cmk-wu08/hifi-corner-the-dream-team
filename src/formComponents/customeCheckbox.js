import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="form__checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "form__error" : ""}
        />
        <label>{label}</label>
      </div>

      {meta.touched && meta.error && (
        <div className="form__error--msg">{meta.error}</div>
      )}
    </>
  );
};
export default CustomCheckbox;
