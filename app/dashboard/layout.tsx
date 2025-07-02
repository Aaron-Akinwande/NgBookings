import React, { ReactNode } from "react";
import {
  Search,
  Filter,
  Calendar,
  MoreHorizontal,
  Download,
  User,
  Bell,
  Settings,
  Home,
  BarChart3,
  MessageSquare,
  FileText,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="flex flex-1 bg-[#F2F2F7] p-4">
        <Sidebar />
        <main className="flex-1 overflow-auto ml-4">{children}</main>
      </div>
    </div>
  );
}
