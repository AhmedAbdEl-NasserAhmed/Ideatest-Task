"use client";

import { useState } from "react";

import Button from "@/components/Button/Button";
import Link from "next/link";
import { FaAlignJustify, FaClipboardList } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { useAppDispatch } from "@/lib/hooks";
import { logout } from "@/lib/slices/userSlice";
import { Storage } from "@/lib/helpers/Storage";
import toast from "react-hot-toast";

const EmployerMainMenu = () => {
  const [expandWidth, setExpandWidth] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
    Storage.removeItem("user");
    Storage.removeItem("token");
    toast.success("See you soon");
  }

  return (
    <div
      className={`bg-secondary h-full transition-all duration-500   ${
        expandWidth ? "basis-[15%]" : "basis-[10%]"
      } rounded-xl p-8 flex flex-col gap-16  `}
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

      <ul className="flex flex-col gap-16 text-[1.4rem] ">
        <li className="font-bold  flex items-center gap-4 ">
          <span>
            <IoIosAlbums />
          </span>
          <Link href="/employer/alltasks">All Tasks</Link>
        </li>
        <li className="font-bold  flex items-center gap-4 ">
          <span>
            <FaClipboardList />
          </span>
          <Link href="/employer/addtask">Add Task</Link>
        </li>
      </ul>
      <div className=" mt-auto">
        <Button onClick={handleLogout} type="button">
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default EmployerMainMenu;
