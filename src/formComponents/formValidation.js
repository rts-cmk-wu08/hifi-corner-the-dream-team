import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  subject: yup.string().required(),
  message: yup.string().max(500).required(),
});
