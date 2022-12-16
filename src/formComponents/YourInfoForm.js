import { Form, Formik } from "formik";
import PaymentOverview from "../templates/paymentOvwerview";
import CustomInput from "./CustomInput";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const YourInfoForm = () => {
  return (
    <article className="your-info">
      <h3 className="your-info__h3 your-info__h3--2col">Your info</h3>
      <section className="form">
        <Formik
          initialValues={{
            fullname: "",
            city: "",
            zip: "",
            address: "",
            email: "",
            phone: "",
          }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <CustomInput label="Fullname" name="fullname" type="text" />
              <div className="form__postal">
                <div className="form__city">
                  <CustomInput label="City" name="city" type="text" />
                </div>
                <div>
                  <CustomInput
                    className="FORM__ZIP"
                    label="Postal code"
                    name="zip"
                    type="text"
                  />
                </div>
              </div>
              <CustomInput label="Address" name="address" type="text" />
              <CustomInput label="Email" name="email" type="text" />
              <CustomInput label="Phone no." name="email" type="text" />
            </Form>
          )}
        </Formik>
      </section>
      <PaymentOverview />
    </article>
  );
};

export default YourInfoForm;
