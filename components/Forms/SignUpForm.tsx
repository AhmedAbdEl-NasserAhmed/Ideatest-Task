"use client";
import { useForm } from "react-hook-form";
import Input from "@/components/Input/Input";
import { useSingUpMutation } from "@/lib/features/api/loginApi";
import signUpValidations from "@/schemas/signUpFormValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import SelectMenu from "../SelectMenu/SelectMenu";
import { SignUpFormValues } from "@/intefaces/interfaces";
import { signUpFormSelectMenuOptions } from "@/constant/constants";
import toast from "react-hot-toast";
import MiniSpinner from "@/ui/MiniSpinner/MiniSpinner";

const SignUpForm = ({ setSignIn }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signUpValidations)
  });

  const [singUp, response] = useSingUpMutation();

  function onSubmit(data: SignUpFormValues) {
    singUp({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: data.role
    })
      .unwrap()
      .then(() => {
        reset();
        toast.success("Your email is created successfully");
        setSignIn(true);
      })
      .catch((err) => {
        toast.error(err.data.message);
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
        options={signUpFormSelectMenuOptions}
        disabled={response.isLoading}
        errorMessage={errors["role"] && errors["role"]?.message}
        register={{
          ...register("role")
        }}
      />
      <Button disabled={response.isLoading} type="submit">
        {response.isLoading ? <MiniSpinner /> : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;
