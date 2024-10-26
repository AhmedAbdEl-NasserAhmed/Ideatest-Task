"use client";

import SignInForm from "@/components/Forms/SignInForm";
import SignUpForm from "@/components/Forms/SignUpForm";
import ProtectedRoute from "@/ui/ProtectedRoute";
import { useState } from "react";

const SwitchForms = () => {
  const [signIn, setSignIn] = useState<boolean>(true);

  return (
    <ProtectedRoute>
      <div className="relative w-[45rem] h-full m-auto flex justify-center items-center ">
        <div
          className={` top-1/2 left-1/2 absolute transition duration-700 ${
            signIn
              ? "translate-x-[90rem] "
              : "transform -translate-x-1/2 -translate-y-1/2"
          }  w-full `}
        >
          <h2 className=" mb-4 text-[3rem] font-bold">Sign Up</h2>
          <SignUpForm />
        </div>

        <div
          className={` top-1/2 left-1/2 absolute transition duration-700 ${
            signIn
              ? "transform -translate-x-1/2 -translate-y-1/2"
              : "translate-x-[90rem] "
          }  w-full `}
        >
          <h2 className=" mb-4 text-[3rem] font-bold">Sign In</h2>
          <SignInForm />
        </div>

        <button
          className="text-[1.2rem] mt-auto font-bold text-center z-20"
          type="button"
          onClick={() => setSignIn((value) => !value)}
        >
          {signIn ? "Do not have an account ?" : "Already have an account ?"}
        </button>
      </div>
    </ProtectedRoute>
  );
};

export default SwitchForms;
