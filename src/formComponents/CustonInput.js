import { Field, Form, Formik, useField } from "formik";
import CustomInfo from "./customeInfo";
import { yourInfoSchema } from "./formValidation";

const CustomInputTwo = () => {
  return (
    <Formik
      initialValues={{
        label: "",
        name: "",
        city: "",
        zip: "",
        address: "",
        email: "",
        phone: "",
      }}
      validationSchema={yourInfoSchema}
    >
      {(props) => (
        <Form>
          <CustomInfo
            label=""
            name=""
            city=""
            zip=""
            address=""
            email=""
            phone=""
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomInputTwo;
