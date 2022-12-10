import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("* Please enter your name"),
  email: yup.string().email("* Please enter a valid email").required(),
  subject: yup.string().required("* Please enter a subject"),
  message: yup.string().max(500).required("* Please write a message"),
});

export const advancedSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("* Please enter a valid email").required(),
  subject: yup.string().required("*Please enter a subject"),
  message: yup
    .string()
    .max(500, "* Message limited to 500 characters")
    .required("* Please enter your message"),
});
