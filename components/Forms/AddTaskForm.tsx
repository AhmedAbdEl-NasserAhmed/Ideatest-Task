"use client";

import { Controller, useForm } from "react-hook-form";

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
import UploadTaskImage from "../UploadTaskImage/UploadTaskImage";

const AddTaskForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AddTaskFormValues>({
    resolver: yupResolver(addTaskFormValidation)
  });

  const fromData = watch();

  console.log(fromData);

  console.log("errors", errors);

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex  gap-16">
      <div className="flex flex-col gap-10 basis-[60%]">
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

        <Button type="submit">Add Task</Button>
      </div>
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange } }) => (
          <div className="grow ">
            <UploadTaskImage
              errorMessage={
                typeof errors["image"]?.message === "string"
                  ? errors["image"].message
                  : undefined
              }
              onChange={onChange}
            />
          </div>
        )}
      />
    </form>
  );
};

export default AddTaskForm;
