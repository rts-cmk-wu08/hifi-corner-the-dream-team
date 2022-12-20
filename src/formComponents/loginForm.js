import { Formik, Form } from "formik";
import CustomCheckbox from "./customeCheckbox";
import CustomInput from "./CustomInput";
import Button from "../components/Button";
import { loginSchema } from "./formValidation";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", rememberMe: false }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form form__short">
          <h3 className="login__h3">Registered Customers</h3>
          <p className="login__p">
            If you have an account, sign in with your email address.
          </p>
          <CustomInput label="Username" name="username" type="text" />
          <CustomInput label="Email" name="email" type="text" />
          <CustomCheckbox type="checkbox" name="rememberMe" />
          <Button
            destination="/profile"
            text="Sign in"
            disabled={isSubmitting}
            type="submit"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
