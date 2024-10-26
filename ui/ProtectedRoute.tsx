"use client";

import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { push } = useRouter();

  const user = useAppSelector((state) => state.user.user);

  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      if (user && user?.role === "leader") {
        push("/employer/addtask");
      } else {
        push("/employee/addtask");
      }
    } else {
      push("/");
    }
  }, [user?.role, push, isAuthenticated, user]);

  return children;
};

export default ProtectedRoute;
