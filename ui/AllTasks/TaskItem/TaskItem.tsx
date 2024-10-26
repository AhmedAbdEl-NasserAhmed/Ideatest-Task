import Image from "next/image";
import React from "react";
import TaskMenuOptions from "../TaskMenuOptions/TaskMenuOptions";

const TaskItem = ({ task }) => {
  return (
    <li className="p-4 h-40 w-full shadow-md border-2 border-borderLight flex justify-between gap-10 ">
      <div className="basis-[30%] h-full flex gap-16 ">
        <Image src={task.photo.url} width={80} height={80} alt="image" />
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-semibold">Title : {task.title}</h2>
          <h2 className="text-md font-semibold">
            Description : {task.description}
          </h2>
        </div>
      </div>
      <div className="flex flex-col grow justify-between items-end items- gap-6">
        <h2 className="text-xl font-semibold">Priority : {task.priority}</h2>
        <h2 className="text-md font-semibold">Stats : {task.state}</h2>
        <h2 className="text-md font-semibold">
          Assigned To : {task.assignedTo[0].name}
        </h2>
      </div>
      <div>
        <TaskMenuOptions task={task} />
      </div>
    </li>
  );
};

export default TaskItem;
