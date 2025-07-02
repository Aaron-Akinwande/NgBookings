"use client"
import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  LayoutDashboard,
  List,
  Landmark,
  MessageSquare,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      icon: <LayoutDashboard className="w-4 h-4" />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <List className="w-4 h-4" />,
      label: "Book Now",
      active: false,
    },
    {
      icon: <Landmark className="w-4 h-4" />,
      label: "Finance",
      active: false,
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      label: "Messages",
      active: false,
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: "Settings",
      active: false,
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top section */}
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex relative w-full max-w-md mx-4">
            <div className="relative flex w-full bg-gray-100 rounded-2xl">
              <Search className="text-purple-800 absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 w-full outline-none placeholder:text-purple-800 py-2 bg-transparent rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-5">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-800 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="hidden lg:flex flex-col">
                <div className="font-semibold text-sm sm:text-base">Sharon</div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  Super Admin
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button and user */}
          <div className="sm:hidden flex items-center gap-3">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3">
          <div className="relative flex w-full bg-gray-100 rounded-2xl">
            <Search className="text-purple-800 absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 w-full outline-none placeholder:text-purple-800 py-2 bg-transparent rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:block px-4 sm:px-6 pb-3 sm:pb-4">
        <div className="w-full bg-gray-100 rounded-2xl px-3 sm:px-4 py-2 flex justify-between items-center">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={`font-medium text-sm lg:text-base flex items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-2xl cursor-pointer transition-all ${
                item.active
                  ? "bg-purple-800 text-white"
                  : "text-gray-700 hover:bg-white hover:text-purple-800"
              }`}
            >
              {item.icon}
              <span className="hidden lg:inline">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`font-medium text-base flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                  item.active
                    ? "bg-purple-800 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
          
          {/* Mobile User Info */}
          <div className="px-4 py-3 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-base">Sharon</div>
                <div className="text-sm font-medium text-gray-600">
                  Super Admin
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}