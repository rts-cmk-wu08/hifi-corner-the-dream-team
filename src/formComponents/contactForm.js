import { useFormik } from "formik";
import { contactSchema } from "./formValidation";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const ContactFormTwo = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* ---- NAME ---- */}
        <div className="form__container--short">
          <label htmlFor="name" className="form__label">
            Full Name <span className="form__star">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form__input ${
              errors.name && touched.name ? "form__error" : ""
            }`}
          />
          {errors.name && touched.name && (
            <p className="form__error--msg">{errors.name}</p>
          )}
        </div>
        {/* ---- EMAIL ---- */}
        <div className="form__container--short">
          <label htmlFor="email" className="form__label">
            Email <span className="form__star">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form__input ${
              errors.email && touched.email ? "form__error" : ""
            }`}
          />
          {errors.email && touched.email && (
            <p className="form__error--msg">{errors.email}</p>
          )}
        </div>
        {/* ---- SUBJECT ---- */}
        <div className="form__container form__container--short">
          <label htmlFor="subject" className="form__label">
            Subject <span className="form__star">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form__input ${
              errors.subject && touched.subject ? "form__error" : ""
            }`}
          />
          {errors.subject && touched.subject && (
            <p className="form__error--msg">{errors.subject}</p>
          )}
        </div>
        {/* ---- MESSAGE ---- */}
        <div className="form__container">
          <label htmlFor="message" className="form__label">
            Message <span className="form__star">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form__input ${
              errors.message && touched.message ? "form__error" : ""
            }`}
          ></textarea>
          {errors.message && touched.message && (
            <p className="form__error--msg">{errors.message}</p>
          )}
        </div>
        {/* ---- BUTTON ---- */}
        <div className="form__btn">
          <button className="button" type="submit" disabled={isSubmitting}>
            <p className="button__link">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormTwo;
