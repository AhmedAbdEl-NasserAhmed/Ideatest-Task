"use client";

import { useAppSelector } from "@/lib/hooks";

const Nav = () => {
  const user = useAppSelector((state) => state.user.user);

  console.log("user", user);

  return (
    <nav className="p-8 h-[6rem] text-xl font-bold bg-secondary flex justify-end ">
      Hello Mr , {user?.name}
    </nav>
  );
};

export default Nav;
