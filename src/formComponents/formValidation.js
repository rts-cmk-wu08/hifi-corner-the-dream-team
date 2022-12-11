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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const yourInfoSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  city: yup
    .string()
    .min(2, "City must be at least 2 characters long")
    .max(100, "City cannot be more than 100 characters long")
    .required("* Please enter your address"),
  zip: yup
    .string()
    .matches(/^[0-9]{5}$/, "Postal code must be a 5-digit number")
    .required("* Please enter your postal code"),
  address: yup
    .string()
    .required("* Please enter your address")
    .min(2, "Address must be at least 2 characters long")
    .max(100, "Address cannot be more than 100 characters long"),
  email: yup.string().email("* Please enter a valid email").required(),
  phone: yup.string().matches(phoneRegExp, "* Phone number is not valid"),
});
