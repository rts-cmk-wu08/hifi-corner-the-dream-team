import { Field, Formik, useFormik } from "formik";
import { Form } from "react-router-dom";
import CustomInput from "./CustonInput";

const ContactComponent = () => {
  return (
    <Formik initialValues={{ name: "", email: "", subject: "", message: "" }}>
      {(props) => {
        <Form>
          <CustomInput label="name" name="name" type="text" />
        </Form>;
      }}
    </Formik>
  );
};

export default ContactComponent;
