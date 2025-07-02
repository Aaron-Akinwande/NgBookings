"use client";
import React, { useState } from "react";
import { Search, Calendar, Download } from "lucide-react";
import { FiltersBar } from "./components/FiltersBar";
import Stats from "./components/Stats";
import Table from "./components/Table";

export default function page() {
  return (
    <div className=" w-full">
      <main className="flex flex-col px-6">
        <div className="flex items-center justify-between mb-3 p-4 bg-white">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button className="bg-[#7E0140] flex gap-1 text-white px-4 py-2 rounded-lg">
              <Download /> <p>Download Report</p>
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-5 bg-white p-4">
          <div className=" w-full flex gap-5 justify-end items-center ">
            <p>From:</p>
            <div className=" flex gap-1 items-center p-3 rounded-2xl bg-[#F2F2F7]">
              <Calendar className="w-4 h-4 text-gray-600" /> Jan 2025
            </div>
            <p>To:</p>
            <div className=" flex gap-1 items-center p-3 rounded-2xl bg-[#F2F2F7]">
              <Calendar className="w-4 h-4 text-gray-600" /> Dec 2025
            </div>
          </div>

          <div>
            <Stats />
          </div>

          <div className="bg-white p-4">
            <FiltersBar />
          </div>

          <div>
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}
