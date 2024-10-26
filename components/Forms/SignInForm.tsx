"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import { Storage } from "@/helpers/Storage";
import { SignInFormValues } from "@/intefaces/interfaces";
import { useSignInMutation } from "@/lib/features/api/loginApi";
import { useAppDispatch } from "@/lib/hooks";
import { assignUser } from "@/lib/slices/userSlice";
import signInFormValidation from "@/schemas/signInFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Button from "../Button/Button";

const SignInForm = () => {
  const [signIn, response] = useSignInMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInFormValidation)
  });

  function onSubmit(data: SignInFormValues) {
    signIn({
      email: data.email,
      password: data.password
    })
      .unwrap()
      .then((res) => {
        toast.success("welcome again");
        dispatch(assignUser({ user: res.data, token: res.token }));
        Storage.addItem("user", res.data);
        Storage.addItem("token", res.token, false);
        reset();
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
