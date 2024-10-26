"use client";

import { useAppSelector } from "@/lib/hooks";

const Nav = () => {
  const user = useAppSelector((state) => state.user.user);

  console.log("user", user);

  return (
    <nav className="p-8 h-[6rem] text-xl font-bold bg-secondary flex justify-center flex-col gap-2 items-end ">
      <h2> Hello Mr , {user?.name}</h2>
      <p>Role: {user?.role}</p>
    </nav>
  );
};

export default Nav;
