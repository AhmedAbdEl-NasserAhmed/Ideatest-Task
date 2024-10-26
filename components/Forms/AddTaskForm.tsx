"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import Button from "../Button/Button";
import { AddTaskFormValues, SignInFormValues } from "@/intefaces/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectMenu from "../SelectMenu/SelectMenu";
import {
  addTaslSelectPriorityMenuOptions,
  addTaslSelectStateMenuOptions
} from "@/constant/constants";
import addTaskFormValidation from "@/schemas/addTaskFormValidation";

const AddTaskForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<AddTaskFormValues>({
    resolver: yupResolver(addTaskFormValidation)
  });

  const fromData = watch();

  console.log(fromData);

  console.log("errors", errors);

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex">
      <div className="flex flex-col gap-10 w-full">
        <Input
          errorMessage={errors["title"] && errors["title"]?.message}
          register={{
            ...register("title")
          }}
          placeholder="Title"
          type="text"
        />
        <Input
          errorMessage={errors["description"] && errors["description"]?.message}
          register={{
            ...register("description")
          }}
          placeholder="Description"
          type="text"
        />
        <SelectMenu
          options={addTaslSelectPriorityMenuOptions}
          errorMessage={errors["priority"] && errors["priority"]?.message}
          register={{
            ...register("priority")
          }}
        />
        <SelectMenu
          options={addTaslSelectStateMenuOptions}
          errorMessage={errors["state"] && errors["state"]?.message}
          register={{
            ...register("state")
          }}
        />
        <div>
          <Button type="submit">Add Task</Button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
