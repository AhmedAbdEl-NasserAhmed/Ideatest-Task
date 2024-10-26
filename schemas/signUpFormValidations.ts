import { passwordRegex } from "@/utils/regex";
import * as yup from "yup";

const signUpFormValidations = yup.object({
  name: yup
    .string()
    .required("Please enter a name")
    .min(6, "Please enter a name not less than 6 characters"),

  email: yup
    .string()
    .required("Please enter a valid email")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Please enter a valid password")
    .matches(
      passwordRegex,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),

  role: yup.string().required("Please select your role")
});

export default signUpFormValidations;
