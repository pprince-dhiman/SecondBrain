import type { ReactElement } from "react";

interface SidebarItemProps {
  text: string, 
  icon: ReactElement;
}

const SidebarItem = ({text, icon} : SidebarItemProps) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 rounded p-3 mr-5 transition-all duration-500">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  )
}

export default SidebarItem