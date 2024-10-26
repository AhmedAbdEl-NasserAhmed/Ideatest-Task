"use client";
import { useGetAllTasksQuery } from "@/lib/features/api/tasksApi";
import TaskItem from "./TaskItem/TaskItem";
import Spinner from "@/components/Spinner/Spinner";
import Menus from "@/components/Menus/Menus";

const AllTasks = () => {
  const { data, isLoading } = useGetAllTasksQuery("Tasks");

  if (!data || isLoading) return <Spinner />;

  if (data.length === 0)
    return (
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold">Start Add and Assign tasks</h2>
      </div>
    );

  return (
    <Menus>
      <ul className="flex flex-col gap-6">
        {data?.data.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </ul>
    </Menus>
  );
};

export default AllTasks;
