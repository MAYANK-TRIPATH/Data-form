import { Button } from "@/components/ui/button";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";



export default function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "My Form",
      path: "/dashboard",
      icon: LibraryBig,
    },
    {
      id: 1,
      name: "Responses",
      path: "/dashboard/responses",
      icon: MessageSquare,
    },
    {
      id: 1,
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: LineChart,
    },
    {
      id: 1,
      name: "Upgrade",
      path: "/dashboard/upgrade",
      icon: Shield,
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path.includes('responses') !==-1);
  },[path])


  return (
    <div className="h-screen shadow-md border border-gray-600 rounded-lg">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2 key={index}
          className={`flex items-center gap-3 p-4 mb-3 hover:gray-600 hover:text-white
          rounded-lg cursor-pointer text-gray-500 font-bold text-2xl
          ${path==menu.path&&'bg-primary text-white'}`}>
          <menu.icon/>
          {menu.name}
          </h2>
        ))}
      </div>
        <div className="fixed bottom-20 ml-6 p-6 w-64 block w-full rounded border border-blue-600 bg-blue-600 px-6 py-3 text-lg font-bold text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
          <Button className="w-full">
            + Create Form
          </Button>
        </div>
    </div>
  );
} 