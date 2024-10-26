"use client";
import Input from "@/components/Input/Input";
import Menus from "@/components/Menus/Menus";
import SelectMenu from "@/components/SelectMenu/SelectMenu";
import Spinner from "@/components/Spinner/Spinner";
import {
  addTaslSelectPriorityMenuOptions,
  addTaslSelectStateMenuOptions
} from "@/constant/constants";

import TaskItem from "./TaskItem/TaskItem";
import { useRouter } from "next/navigation";

const AllTasks = ({
  data,
  isLoading,
  emptyMessage,

  setValue,
  value
}) => {
  const { push } = useRouter();

  function hanldeSetParam(e) {
    const { name, value } = e.target;

    const url = new URL(window.location.href);

    url.searchParams.set(name, value);

    push(url.toString());
  }

  if (!data || isLoading) return <Spinner />;

  return (
    <Menus>
      <div className="mb-10 flex justify-between">
        <div>
          <Input
            type="text"
            placeholder="Search by task name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center gap-6">
          <SelectMenu
            name="priority"
            onChange={hanldeSetParam}
            options={addTaslSelectPriorityMenuOptions}
          />
          <SelectMenu
            name="state"
            onChange={hanldeSetParam}
            options={addTaslSelectStateMenuOptions}
          />
        </div>
      </div>
      {!data.data.length ? (
        <div className="flex h-screen items-start justify-center">
          <h2 className="text-2xl font-bold">{emptyMessage}</h2>
        </div>
      ) : (
        <ul className="flex flex-col gap-6">
          {data?.data.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </ul>
      )}
    </Menus>
  );
};

export default AllTasks;
