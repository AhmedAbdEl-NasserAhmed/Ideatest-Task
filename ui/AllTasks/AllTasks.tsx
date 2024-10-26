"use client";
import { useGetAllTasksQuery } from "@/lib/features/api/todosApi";
import TaskItem from "./TaskItem/TaskItem";
import Spinner from "@/components/Spinner/Spinner";
import Menus from "@/components/Menus/Menus";

const AllTasks = () => {
  const { data, isLoading } = useGetAllTasksQuery("todos");

  if (!data || isLoading) return <Spinner />;

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
