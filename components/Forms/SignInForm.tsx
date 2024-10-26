"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import Button from "../Button/Button";
import { SignInFormValues } from "@/intefaces/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import signInFormValidation from "@/schemas/signInFormValidation";
import { useSignInMutation } from "@/lib/features/api/loginApi";
import toast from "react-hot-toast";

const SignInForm = () => {
  const [signIn, response] = useSignInMutation();

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

  function onSubmit(data: SignInFormValues) {
    signIn({
      email: data.email,
      password: data.password
    })
      .unwrap()
      .then((res) => {
        console.log("res", res);
        toast.success("welcome again");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        disabled={response.isLoading}
        errorMessage={errors["email"] && errors["email"]?.message}
        register={{
          ...register("email")
        }}
        placeholder="example@user.com"
        type="text"
      />
      <Input
        disabled={response.isLoading}
        errorMessage={errors["password"] && errors["password"]?.message}
        register={{
          ...register("password")
        }}
        placeholder="Password"
        type="password"
      />
      <Button disabled={response.isLoading} type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
