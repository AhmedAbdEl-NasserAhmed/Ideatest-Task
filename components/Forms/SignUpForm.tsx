"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import Button from "../Button/Button";
import { emailRegex, passwordRegex } from "@/utils/regex";
import SelectMenu from "../SelectMenu/SelectMenu";
import { useSingUpMutation } from "@/lib/features/api/loginApi";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
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

  const [singUp, response] = useSingUpMutation();

  function onSubmit(data: FormValues) {
    singUp({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: data.role
    })
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        disabled={response.isLoading}
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
        disabled={response.isLoading}
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
        disabled={response.isLoading}
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
        disabled={response.isLoading}
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
      <SelectMenu
        disabled={response.isLoading}
        errorMessage={errors["role"] && errors["role"]?.message}
        register={{
          ...register("role", {
            required: {
              value: true,
              message: "Please select your role "
            }
          })
        }}
      />
      <Button disabled={response.isLoading} type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
