"use client";

import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useGetAllTasksEmployeeQuery } from "@/lib/features/api/tasksApi";
import { useAppSelector } from "@/lib/hooks";
import AllTasks from "@/ui/AllTasks/AllTasks";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
const Page = () => {
  const [value, setValue] = useState<string>("");

  const user = useAppSelector((state) => state.user.user);

  const searchParams = useSearchParams();

  const state = searchParams.get("state");

  const debounceValue = useDebounceValue(value);

  const { data, isLoading } = useGetAllTasksEmployeeQuery({
    id: user?._id,
    letter: debounceValue,
    priority: "done",
    state: state || ""
  });

  return (
    <div>
      <h2 className="font-extrabold text-4xl mb-10">Finished Tasks</h2>
      <AllTasks
        value={value}
        data={data}
        isLoading={isLoading}
        emptyMessage="No Finished Tasks"
        setValue={setValue}
      />
    </div>
  );
};

export default Page;
