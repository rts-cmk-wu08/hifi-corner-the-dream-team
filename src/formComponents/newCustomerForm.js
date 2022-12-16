import { Form, Formik } from "formik";
import CustomCheckbox from "./customeCheckbox";
import CustomInput from "./CustomInput";
import { createAccountSchema } from "./formValidation";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const NewCustomerForm = () => {
  return (
    <Formik
      initialValues={{ fullname: "", email: "", subject: "", message: "" }}
      validationSchema={createAccountSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form">
            <div className="form__short">
              <CustomInput label="Firstname" name="firstname" type="text" />
              <CustomInput label="Lastname" name="lastname" type="text" />
              <CustomInput label="Email" name="email" type="text" />
              <CustomInput label="Password" name="password" type="text" />
              <CustomInput
                label="Repeat password"
                name="repeatPassword"
                type="text"
              />
              <CustomCheckbox type="checkbox" name="dataStorage" />
              <CustomCheckbox type="checkbox" name="newsletter" />
            </div>
            <div className="form__btn">
              <button className="button" type="submit" disabled={isSubmitting}>
                <p className="button__link">Create account</p>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewCustomerForm;
