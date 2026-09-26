import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 pl-5">
      <div className="text-2xl pt-4 flex items-center gap-2 mb-5">
        <div className="text-purple-600"><LuBrain /></div>
        Another Brain
      </div>
      <div className="p-4 text-gray-700">
        <SidebarItem text="Youtube" icon={<AiOutlineYoutube size={20}/>}/>
        <SidebarItem text="Twitter" icon={<FaXTwitter size={20}/>}/>
      </div>
    </div>
  );
};

export default Sidebar;
