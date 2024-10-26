import * as yup from "yup";

const addTaskFormValidation = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(6, "Title must be at least 6 characters long"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long"),

  priority: yup.string().required("Please select a priority"),

  state: yup.string().required("Please select a state"),

  assignTo: yup.string().required("Please select an employee"),

  image: yup.mixed().required("Please select an image for your task ")
});

export default addTaskFormValidation;
