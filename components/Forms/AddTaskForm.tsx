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
import { useAddTodoMutation } from "@/lib/features/api/todosApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddTaskForm = () => {
  const { data } = useGetAllEmployeesQuery("employees");

  const { push } = useRouter();

  const [addTodo, response] = useAddTodoMutation();

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AddTaskFormValues>({
    resolver: yupResolver(addTaskFormValidation)
  });

  const usersOption = data?.data.map((user) => {
    return {
      id: user._id,
      value: user._id,
      content: user.name
    };
  });

  function onSubmit(data: AddTaskFormValues) {
    const formData = new FormData();

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("assignedTo[]", data.assignTo);
    formData.append("priority", data.priority);
    formData.append("state", data.state);

    addTodo(formData)
      .unwrap()
      .then(() => {
        toast.success("Task added Successfully");
        push("/employer/alltasks");
        reset();
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex  gap-16">
      <div className="flex flex-col gap-10 basis-[60%]">
        <Input
          disabled={response.isLoading}
          errorMessage={errors["title"] && errors["title"]?.message}
          register={{
            ...register("title")
          }}
          placeholder="Title"
          type="text"
        />
        <Input
          disabled={response.isLoading}
          errorMessage={errors["description"] && errors["description"]?.message}
          register={{
            ...register("description")
          }}
          placeholder="Description"
          type="text"
        />
        <SelectMenu
          disabled={response.isLoading}
          options={addTaslSelectPriorityMenuOptions}
          errorMessage={errors["priority"] && errors["priority"]?.message}
          register={{
            ...register("priority")
          }}
        />
        <SelectMenu
          disabled={response.isLoading}
          options={addTaslSelectStateMenuOptions}
          errorMessage={errors["state"] && errors["state"]?.message}
          register={{
            ...register("state")
          }}
        />
        <SelectMenu
          disabled={response.isLoading}
          defaultOption="Please Select an employee"
          options={usersOption}
          errorMessage={errors["assignTo"] && errors["assignTo"]?.message}
          register={{
            ...register("assignTo")
          }}
        />

        <Button disabled={response.isLoading} type="submit">
          Add Task
        </Button>
      </div>
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange } }) => (
          <div className="grow ">
            <UploadTaskImage
              disabled={response.isLoading}
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
