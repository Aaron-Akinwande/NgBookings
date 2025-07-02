"use client";

import React, { useState } from "react";
import {
  User,
  LayoutDashboard,
  ClipboardList,
  Eclipse,
  PanelLeftClose,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-full">
      <aside
        className={`h-full p-4 flex flex-col gap-3 rounded-xl bg-white border-r border-gray-200 min-h-screen transition-all duration-300 ${
          collapsed ? "w-[80px]" : "w-[250px]"
        }`}
      >
        <div className="w-full flex justify-end">
          <button onClick={() => setCollapsed(!collapsed)}>
            <PanelLeftClose className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "space-x-2"
          }`}
        >
          <div className="w-10 h-10 bg-[#7E0140] rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <div className="font-semibold text-base">Sharon</div>
              <div className="text-sm font-medium text-[#4F4F50]">
                Travel Agent
              </div>
            </div>
          )}
        </div>

        <nav className="flex flex-col gap-4 py-4">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <LayoutDashboard className="w-5 h-5" />
            {!collapsed && <span>Dashboard</span>}
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 bg-[#F9F2F5] text-[#7E0140] rounded-lg"
          >
            <ClipboardList className="w-5 h-5" />
            {!collapsed && <span>Overview</span>}
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Eclipse className="w-5 h-5" />
            {!collapsed && <span>Dark Mode</span>}
          </a>
        </nav>
      </aside>
    </div>
  );
}
