import SignInForm from "@/components/Forms/SignInForm";
import SignUpForm from "@/components/Forms/SignUpForm";

export default function Home() {
  return (
    <div className="bg-main p-14 h-screen flex items-center justify-between gap-10 ">
      <div className="w-1/2 border-2 border-red-500 h-full rounded-2xl">
        &nbsp;
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-borderLight h-full p-10 w-1/2 rounded-2xl">
        <div className="w-[45rem] m-auto">
          <h2 className="text-[3rem] font-bold">Sign in</h2>
          <div className="mt-4">
            <SignUpForm />
          </div>

          <h2 className="text-xl font-bold text-center mt-10">
            Do not have an account ?
          </h2>
        </div>
      </div>
    </div>
  );
}
