"use client";

import Spinner from "@/components/Spinner/Spinner";
import { useGetSingleTaskQuery } from "@/lib/features/api/tasksApi";
import Image from "next/image";
import { useParams } from "next/navigation";

const TaskDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleTaskQuery(id);

  if (isLoading || !data) return <Spinner />;

  const {
    _id,
    title,
    description,
    assignedTo,
    priority,
    state,
    photo: { url: imageUrl }
  } = data.data;

  return (
    <div className="h-full w-4/5 mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden p-10 mt-12 flex flex-col items-center">
      <div className="flex items-center space-x-8 mb-6">
        <Image
          width={80}
          height={80}
          src={imageUrl}
          alt="Task Image"
          className="w-28 h-28 rounded-xl object-cover shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-500 mt-2">Task ID: {_id}</p>
        </div>
      </div>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-md text-center">
        {description}
      </p>

      <div className="mt-8 w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">Priority:</span>
          <span
            className={`px-4 py-2 rounded-full text-lg font-semibold ${
              priority === "high"
                ? "bg-red-100 text-red-600"
                : priority === "medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {priority}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold text-gray-800">State:</span>
          <span
            className={`px-4 py-2 rounded-full text-lg font-semibold ${
              state === "done"
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {state}
          </span>
        </div>
      </div>

      <div className="mt-10 w-full max-w-md flex items-center justify-between ">
        <h3 className="text-lg font-semibold text-gray-800">Assigned To:</h3>
        <p className=" text-lg text-gray-600">{assignedTo[0].name}</p>
      </div>
    </div>
  );
};
export default TaskDetails;
