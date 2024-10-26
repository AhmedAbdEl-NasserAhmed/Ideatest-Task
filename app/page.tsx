import SwitchForms from "@/components/SwitchForms/SwitchForms";
import WelcomePage from "@/ui/WelcomePage";

export default function Home() {
  return (
    <div className="bg-main p-14 h-screen flex items-center justify-between gap-10 ">
      <WelcomePage />
      <div className="flex flex-col items-center justify-center border-2 border-borderLight h-full p-10 w-1/2 rounded-2xl overflow-hidden">
        <SwitchForms />
      </div>
    </div>
  );
}
