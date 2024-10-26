"use client";

import { Controller, useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import {
  addTaslSelectPriorityMenuOptions,
  addTaslSelectStateMenuOptions
} from "@/constant/constants";
import { AddTaskFormValues } from "@/intefaces/interfaces";
import addTaskFormValidation from "@/schemas/addTaskFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import SelectMenu from "../SelectMenu/SelectMenu";
import UploadTaskImage from "../UploadTaskImage/UploadTaskImage";
import { useGetAllEmployeesQuery } from "@/lib/features/api/emploeesApi";

const AddTaskForm = () => {
  const { data } = useGetAllEmployeesQuery("employees");

  console.log("data", data);

  const {
    register,

    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AddTaskFormValues>({
    resolver: yupResolver(addTaskFormValidation)
  });

  const usersOption = data?.data.map((user) => {
    return {
      id: user._id,
      content: user.name
    };
  });

  function onSubmit(data) {
    console.log(data);
  }

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
        <SelectMenu
          defaultOption="Please Select an employee"
          options={usersOption}
          errorMessage={errors["assignTo"] && errors["assignTo"]?.message}
          register={{
            ...register("assignTo")
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
