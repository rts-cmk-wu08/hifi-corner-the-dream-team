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
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password: "",
      }}
      validationSchema={createAccountSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form">
            <h3 className="form__h3">Create New Customer Account</h3>
            <div className="form__short">
              <CustomInput label="Firstname" name="firstname" type="text" />
              <CustomInput label="Lastname" name="lastname" type="text" />
              <CustomInput label="Email" name="email" type="text" />
              <CustomInput label="Password" name="password" type="password" />
              <CustomInput
                label="Repeat password"
                name="confirmPassword"
                type="password"
              />
              <CustomCheckbox
                type="checkbox"
                name="dataStorage"
                label="By using this form you agree with the storage and handling of your data by this website."
              />
              <CustomCheckbox
                type="checkbox"
                name="newsletter"
                label="Sign up for newsletter"
              />
            </div>
            <div className="form__btn form__btn--left">
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
