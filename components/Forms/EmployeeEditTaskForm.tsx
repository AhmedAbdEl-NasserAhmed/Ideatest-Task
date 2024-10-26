"use client";

import { Controller, useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import {
  addTaslSelectPriorityMenuOptions,
  addTaslSelectStateMenuOptions
} from "@/constant/constants";
import { AddTaskFormValues } from "@/intefaces/interfaces";
import {
  useEditTaskMutation,
  useGetSingleTaskQuery
} from "@/lib/features/api/tasksApi";
import addTaskFormValidation from "@/schemas/addTaskFormValidation";
import MiniSpinner from "@/ui/MiniSpinner/MiniSpinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import SelectMenu from "../SelectMenu/SelectMenu";
import Spinner from "../Spinner/Spinner";
import UploadTaskImage from "../UploadTaskImage/UploadTaskImage";

const EmployeeEditTaskForm = () => {
  const { id } = useParams();

  const { data: singleTask, isLoading } = useGetSingleTaskQuery(id, {
    skip: !id
  });

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
    setValue("image", singleTask?.data.photo.url);
  }, [singleTask?.data, setValue]);

  function onSubmit(data: AddTaskFormValues) {
    const formData = new FormData();

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    formData.append("title", data.title);
    formData.append("description", data.description);
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
          defaultvalue={singleTask?.data.title}
          disabled={true}
          errorMessage={errors["title"] && errors["title"]?.message}
          register={{
            ...register("title")
          }}
          placeholder="Title"
          type="text"
        />
        <Input
          defaultvalue={singleTask?.data.description}
          disabled={true}
          errorMessage={errors["description"] && errors["description"]?.message}
          register={{
            ...register("description")
          }}
          placeholder="Description"
          type="text"
        />
        <SelectMenu
          value={singleTask?.data.priority}
          disabled={true}
          options={addTaslSelectPriorityMenuOptions}
          errorMessage={errors["priority"] && errors["priority"]?.message}
          register={{
            ...register("priority")
          }}
        />
        <SelectMenu
          value={singleTask?.data.state}
          disabled={response.isLoading}
          options={addTaslSelectStateMenuOptions}
          errorMessage={errors["state"] && errors["state"]?.message}
          register={{
            ...register("state")
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
              disabled={true}
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

export default EmployeeEditTaskForm;
