import React, { ReactNode  } from "react";
import { Search, Filter, Calendar, MoreHorizontal, Download, User, Bell, Settings, Home, BarChart3, MessageSquare, FileText, Users, MapPin, Phone, Mail } from 'lucide-react';
import Header from "./components/header";
import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className="  w-full">
   <Header/>
      <div className=" h-full  flex p-4 bg-[#F2F2F7]">
        <div className=" h-full col-span-1 ">
            <Sidebar/>
        </div>
        <div className=" col-span-5  w-full"> {children}</div>
      </div>
    </div>
  );
}
