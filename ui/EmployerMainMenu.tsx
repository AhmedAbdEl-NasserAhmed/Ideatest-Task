"use client";

import { useState } from "react";

import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa";

const EmployerMainMenu = () => {
  const [expandWidth, setExpandWidth] = useState<boolean>(true);

  return (
    <div
      className={`bg-secondary h-full transition-all duration-500 ${
        expandWidth ? "basis-[20%]" : "basis-[10%]"
      } rounded-xl p-8 flex flex-col gap-5  `}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Menu</h2>
        <span
          onClick={() => setExpandWidth((prev) => !prev)}
          className="text-2xl cursor-pointer"
        >
          <FaAlignJustify />
        </span>
      </div>
      <ul>
        <li className="font-bold text-xl">
          <Link href="/employer/addtask">Add Task</Link>
        </li>
      </ul>
    </div>
  );
};

export default EmployerMainMenu;
