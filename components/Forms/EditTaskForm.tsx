"use client";

import { Controller, useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import {
  addTaslSelectPriorityMenuOptions,
  addTaslSelectStateMenuOptions
} from "@/constant/constants";
import { AddTaskFormValues } from "@/intefaces/interfaces";
import { useGetAllEmployeesQuery } from "@/lib/features/api/emploeesApi";
import {
  useEditTaskMutation,
  useGetSingleTaskQuery
} from "@/lib/features/api/tasksApi";
import addTaskFormValidation from "@/schemas/addTaskFormValidation";
import MiniSpinner from "@/ui/MiniSpinner/MiniSpinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import SelectMenu from "../SelectMenu/SelectMenu";
import Spinner from "../Spinner/Spinner";
import UploadTaskImage from "../UploadTaskImage/UploadTaskImage";
import { useEffect } from "react";

const EditTaskForm = () => {
  const { id } = useParams();

  const { data: singleTask, isLoading } = useGetSingleTaskQuery(id, {
    skip: !id
  });

  const { data } = useGetAllEmployeesQuery("Employees");

  const { push } = useRouter();

  const [editTask, response] = useEditTaskMutation();

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AddTaskFormValues>({
    resolver: yupResolver(addTaskFormValidation)
  });

  const formData = watch();

  console.log("formData", formData);

  useEffect(() => {
    setValue("title", singleTask?.data.title);
    setValue("description", singleTask?.data.description);
    setValue("priority", singleTask?.data.priority);
    setValue("state", singleTask?.data.state);
    setValue("assignTo", singleTask?.data.assignedTo[0]._id);
    setValue("image", singleTask?.data.photo.url);
  }, [singleTask?.data]);

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

    editTask({ body: formData, id })
      .unwrap()
      .then(() => {
        toast.success("Task Edited Successfully");
        reset();
        push("/employer/alltasks");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  }

  if (!singleTask || isLoading) return <Spinner />;

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
          {response.isLoading ? <MiniSpinner /> : "Edit Task"}
        </Button>
      </div>
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange } }) => (
          <div className="grow ">
            <UploadTaskImage
              defaultValue={formData?.image}
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

export default EditTaskForm;
