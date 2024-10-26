import * as yup from "yup";

const signInFormValidation = yup.object({
  email: yup.string().required("Please enter your email"),

  password: yup.string().required("Please enter your password")
});

export default signInFormValidation;
