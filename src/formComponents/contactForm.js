import Button from "../components/Button";
import { useFormik } from "formik";
import { contactSchema } from "./formValidation";

const ContactFormTwo = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
  });
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form__form">
        {/* ---- NAME ---- */}
        <div className="form__container--short">
          <label htmlFor="name" className="form__label">
            Full Name <span className="form__star">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="form__input"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* ---- EMAIL ---- */}
        <div className="form__container--short">
          <label htmlFor="email" className="form__label">
            Email <span className="form__star">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="form__input"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {/* ---- SUBJECT ---- */}
        <div className="form__container form__container--short">
          <label htmlFor="subject" className="form__label">
            Subject <span className="form__star">*</span>
          </label>
          <input
            id="subject"
            type="text"
            className="form__input"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
          ></textarea>
        </div>
        {/* ---- BUTTON ---- */}
        <div className="form__btn">
          <Button destination="/" text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactFormTwo;
