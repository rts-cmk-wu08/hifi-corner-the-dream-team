import { useFormik } from "formik";
import { contactSchema } from "./formValidation";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const YourInfoForm = () => {
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
      city: "",
      zip: "",
      email: "",
      phone: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        {/* ---------- NAME ---------- */}
        <div className="form__container">
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
        {/* ---------- CITY & POSTAL CODE ---------- */}
        <div className="form__postal">
          <div className="form__city">
            <label htmlFor="city" className="form__label">
              City <span className="form__star">*</span>
            </label>
            <input
              id="city"
              type="text"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form__input ${
                errors.city && touched.city ? "form__error" : ""
              }`}
            />
            {errors.city && touched.city && (
              <p className="form__error--msg">{errors.city}</p>
            )}
          </div>
          <div className="form__zip">
            <label htmlFor="zip" className="form__label">
              Postal Code <span className="form__star">*</span>
            </label>
            <input
              id="zip"
              type="text"
              value={values.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form__input ${
                errors.zip && touched.zip ? "form__error" : ""
              }`}
            />
            {errors.zip && touched.zip && (
              <p className="form__error--msg">{errors.zip}</p>
            )}
          </div>
        </div>
        {/* ---------- ADDRESS ---------- */}
        <div className="form__container">
          <label htmlFor="name" className="form__label">
            Address <span className="form__star">*</span>
          </label>
          <input
            id="address"
            type="text"
            value={values.adress}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form__input ${
              errors.address && touched.address ? "form__error" : ""
            }`}
          />
          {errors.address && touched.address && (
            <p className="form__error--msg">{errors.address}</p>
          )}
        </div>
        {/* ---------- EMAIL ---------- */}
        <div className="form__container">
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
        {/* ---------- PHONE NUMBER ---------- */}
        <div className="form__comntainer"></div>
      </form>
    </section>
  );
};

export default YourInfoForm;
