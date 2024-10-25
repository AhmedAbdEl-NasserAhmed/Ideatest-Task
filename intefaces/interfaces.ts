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
  onClick?: () => void;
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
  defaultvalue?: string;
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
  defaultOption?: string;
}

export interface AddTaskFormValues {
  image?: any;
  title?: string;
  description?: string;
  priority?: string;
  state?: string;
  assignTo?: string;
}
export interface User {
  id: string;
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface DeletWindowProps {
  message: string;
  setShowModal?: () => void;
  onClick?: any;
  disabled?: boolean;
}
