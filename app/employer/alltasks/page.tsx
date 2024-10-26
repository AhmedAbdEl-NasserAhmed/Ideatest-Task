import AllTasks from "@/ui/AllTasks/AllTasks";
import React from "react";

const Page = () => {
  return (
    <div className="overflow-y-scroll">
      <h2 className="font-extrabold text-4xl mb-10">All Tasks</h2>
      <AllTasks />
    </div>
  );
};

export default Page;
