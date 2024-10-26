"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import Button from "../Button/Button";
import { emailRegex, passwordRegex } from "@/utils/regex";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const fromData = watch();

  console.log(fromData);

  console.log("errors", errors);

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        errorMessage={errors["name"] && errors["name"]?.message}
        register={{
          ...register("name", {
            required: {
              value: true,
              message: "Please enter your name "
            },
            minLength: {
              value: 6,
              message: "Please enter name not less than 6 character"
            }
          })
        }}
        placeholder="Name"
        type="text"
      />
      <Input
        errorMessage={errors["email"] && errors["email"]?.message}
        register={{
          ...register("email", {
            required: {
              value: true,
              message: "Please enter your email"
            },
            pattern: {
              value: emailRegex,
              message: "Please enter a valid email address."
            }
          })
        }}
        placeholder="example@user.com"
        type="text"
      />
      <Input
        errorMessage={errors["password"] && errors["password"]?.message}
        register={{
          ...register("password", {
            required: {
              value: true,
              message: "Please enter your password"
            },
            pattern: {
              value: passwordRegex,
              message:
                "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
            }
          })
        }}
        placeholder="Password"
        type="password"
      />
      <Input
        errorMessage={
          errors["confirmPassword"] && errors["confirmPassword"]?.message
        }
        register={{
          ...register("confirmPassword", {
            required: {
              value: true,
              message: "Please confirm your password"
            },
            validate: (value) =>
              value === watch("password") || "Passwords do not match"
          })
        }}
        placeholder="Confirm Password"
        type="password"
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
