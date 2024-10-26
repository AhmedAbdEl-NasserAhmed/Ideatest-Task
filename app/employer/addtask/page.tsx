import AddTaskForm from "@/components/Forms/AddTaskForm";
import { useGetAllTasksQuery } from "@/lib/features/api/todosApi";

const page = () => {
  return (
    <div>
      <h2 className="font-extrabold text-4xl mb-10">Add Task</h2>
      <AddTaskForm />
    </div>
  );
};

export default page;
