import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { contactSchema } from "./formValidation";
import TextareaInput from "./textareaInput";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const ContactFormTwo = () => {
  return (
    <Formik
      initialValues={{ fullname: "", email: "", subject: "", message: "" }}
      validationSchema={contactSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form">
            <div className="form__short">
              <CustomInput label="Fullname" name="fullname" type="text" />
              <CustomInput label="Email" name="email" type="text" />
              <CustomInput label="Subject" name="subject" type="text" />
            </div>
            <TextareaInput label="Message" name="message" cols="30" rows="10" />
            <div className="form__btn">
              <button className="button" type="submit" disabled={isSubmitting}>
                <p className="button__link">Submit</p>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactFormTwo;
