import { UseFormRegisterReturn } from "react-hook-form";

export interface SignUpFormValues {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
}

export interface SignInFormValues {
  email?: string;
  password?: string;
}

export interface ButtonProps {
  type: "submit" | "button";
  disabled?: boolean;
  children: React.ReactNode;
}

export interface InputProps {
  name?: string;
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  label?: string;
  onChange?: (e) => void;
  errorMessage?: string;
  disabled?: boolean;
}

export interface SelectMenuProps {
  name?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (e) => void;
  errorMessage?: string;
  disabled?: boolean;
  options: {
    id: string;
    value: string;
    content: string;
  }[];
}

export interface AddTaskFormValues {
  image?: File;
  title?: string;
  description?: string;
  priority?: string;
  state?: string;
}
