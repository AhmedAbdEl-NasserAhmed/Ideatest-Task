"use client";

import { useState } from "react";

import Button from "@/components/Button/Button";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa";
import { HiAnnotation, HiCube } from "react-icons/hi";
import { IoIosAlbums } from "react-icons/io";

const EmployerMainMenu = () => {
  const [expandWidth, setExpandWidth] = useState<boolean>(true);

  return (
    <div
      className={`bg-secondary h-full transition-all duration-500  ${
        expandWidth ? "basis-[20%]" : "basis-[10%]"
      } rounded-xl p-8 flex flex-col justify-between  `}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Menu</h2>
        <span
          onClick={() => setExpandWidth((prev) => !prev)}
          className="text-2xl cursor-pointer"
        >
          <FaAlignJustify />
        </span>
      </div>

      <ul className="flex flex-col gap-20 text-[1.6rem] ">
        <li className="font-bold  flex items-center gap-4 ">
          <span>
            <HiCube />
          </span>
          <Link href="/employer/dashboard">Dashbaord</Link>
        </li>

        <li className="font-bold  flex items-center gap-4 ">
          <span>
            <IoIosAlbums />
          </span>
          <Link href="/employer/addtask">All Tasks</Link>
        </li>
        <li className="font-bold  flex items-center gap-4 ">
          <span>
            <HiAnnotation />
          </span>
          <Link href="/employer/addtask">Add Task</Link>
        </li>
      </ul>

      <Button type="button">Sign Out</Button>
    </div>
  );
};

export default EmployerMainMenu;
