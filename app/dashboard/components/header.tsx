import React from "react";
import {
  Search,
  Bell,
  User,
  LayoutDashboard,
  List,
  Landmark,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function Header() {
  return (
    <div>
      <div>
        <header className=" flex flex-col gap-6 bg-white border-b border-gray-200 px-6 py-4">
          <div className="grid grid-cols-3 ">
            <div className="flex items-center space-x-4">
              <div>
                <img src="/logo.png" alt="" />
              </div>
            </div>
            <div className="relative flex  w-3/5 bg-[#F2F2F7]  rounded-2xl ">
              <Search className="text-[#7E0140] absolute left-3 top-1/2 transform -translate-y-1/2  w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 w-full outline-none placeholder:text-[#7E0140] py-2"
              />
            </div>
            <div className="flex items-center justify-end gap-5  ">
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#7E0140] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className=" flex flex-col ">
                  <div className=" font-semibold text-base">Sharon</div>
                  <div className="text-sm font-medium text-[#4F4F50]">
                    Super Admin
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-[#F2F2F7]  rounded-4xl px-4 py-2 flex justify-between items-center">
            <div className=" font-medium text-base flex items-center gap-2 p-3 bg-[#7E0140] rounded-4xl text-white">
              <LayoutDashboard />
              Dashboard
            </div>
            <div className=" font-medium text-base flex items-center gap-2">
              {" "}
              <List />
              Book Now
            </div>
            <div className=" font-medium text-base flex items-center gap-2">
              <Landmark />
              Finance
            </div>
            <div className=" font-medium text-base flex items-center gap-2">
              <MessageSquare />
              Messages
            </div>
            <div className=" font-medium text-base flex items-center gap-2">
              <Settings />
              Settings
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
