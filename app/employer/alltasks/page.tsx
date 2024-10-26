"use client";

import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useGetAllTasksQuery } from "@/lib/features/api/tasksApi";
import AllTasks from "@/ui/AllTasks/AllTasks";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
const Page = () => {
  const [value, setValue] = useState<string>("");

  const searchParams = useSearchParams();

  const priority = searchParams.get("priority");

  const state = searchParams.get("state");

  const debounceValue = useDebounceValue(value);

  const { data, isLoading } = useGetAllTasksQuery({
    letter: debounceValue,
    priority: priority || "",
    state: state || ""
  });

  return (
    <div>
      <h2 className="font-extrabold text-4xl mb-10">All Tasks</h2>
      <AllTasks
        value={value}
        data={data}
        isLoading={isLoading}
        emptyMessage=" Start Adding and Assigning tasks"
        setValue={setValue}
      />
    </div>
  );
};

export default Page;
