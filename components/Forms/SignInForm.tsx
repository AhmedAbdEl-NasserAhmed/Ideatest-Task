"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import Button from "../Button/Button";
import { SignInFormValues } from "@/types/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import signInFormValidation from "@/schemas/signInFormValidation";

const SignInForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInFormValidation)
  });

  const fromData = watch();

  console.log(fromData);

  console.log("errors", errors);

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        errorMessage={errors["email"] && errors["email"]?.message}
        register={{
          ...register("email")
        }}
        placeholder="example@user.com"
        type="text"
      />
      <Input
        errorMessage={errors["password"] && errors["password"]?.message}
        register={{
          ...register("password")
        }}
        placeholder="Password"
        type="password"
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default SignInForm;
