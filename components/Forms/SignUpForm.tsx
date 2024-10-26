"use client";
import { useForm } from "react-hook-form";
import Input from "@/components/Input/Input";
import { useSingUpMutation } from "@/lib/features/api/loginApi";
import signUpValidations from "@/schemas/signUpValidations";
import { FormValues } from "@/types/signUpFormValues";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import SelectMenu from "../SelectMenu/SelectMenu";

const SignUpForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(signUpValidations)
  });

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
          ...register("name")
        }}
        placeholder="Name"
        type="text"
      />
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
      <Input
        disabled={response.isLoading}
        errorMessage={
          errors["confirmPassword"] && errors["confirmPassword"]?.message
        }
        register={{
          ...register("confirmPassword")
        }}
        placeholder="Confirm Password"
        type="password"
      />
      <SelectMenu
        disabled={response.isLoading}
        errorMessage={errors["role"] && errors["role"]?.message}
        register={{
          ...register("role")
        }}
      />
      <Button disabled={response.isLoading} type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
