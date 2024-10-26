import * as yup from "yup";

const addTaskFormValidation = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long"),

  priority: yup.string().required("Please select a priority"),

  state: yup.string().required("Please select a state")
});

export default addTaskFormValidation;
