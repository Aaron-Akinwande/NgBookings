"use client";
import React, { useEffect, useState } from "react";
import { Search, Calendar, Download } from "lucide-react";
import { FiltersBar } from "./components/FiltersBar";
import Stats from "./components/Stats";
import Table from "./components/Table";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/api/apiCall";
import { RESERVATIONS, SUMMARY } from "@/api/apiUrl";
import { CalendarCheck2, ListChecks, BookmarkX, ClipboardPen, SquarePlus, ClipboardList } from 'lucide-react';


export default function page() {

  // console.log("Stored token:", localStorage.getItem("authtoken"));


  const {
    data: summaryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["agent-summary"],
    queryFn: () => getRequest({ url: SUMMARY }),
    enabled: typeof window !== "undefined", 
  });

   const {
    data: reserveData,
  } = useQuery({
    queryKey: ["agent-reservation"],
    queryFn: () => getRequest({ url: RESERVATIONS }),
    enabled: typeof window !== "undefined", 
  });
  
  const summary = summaryData?.summary;

  const statsData = summary
    ? [
        {
          title: "Daily Check-in",
          value: summary.dailyCheckIn.count,
          unit: summary.dailyCheckIn.change,
          icon: <CalendarCheck2 className="w-5 h-5" />,
        },
        {
          title: "Daily Check-out",
          value: summary.dailyCheckOut.count,
          unit: summary.dailyCheckOut.change,
          icon: <CalendarCheck2 className="w-5 h-5" />,
        },
        {
          title: "New Bookings",
          value: summary.newBookings.count,
          unit: summary.newBookings.change,
          icon: <ListChecks className="w-5 h-5" />,
        },
        {
          title: "Total Cancellations",
          value: summary.totalCancellations.count,
          unit: summary.totalCancellations.change,
          icon: <BookmarkX className="w-5 h-5" />,
        },
        {
          title: "Pending Bookings",
          value: summary.pendingBookings.count,
          unit: summary.pendingBookings.change,
          icon: <ClipboardPen className="w-5 h-5" />,
        },
        {
          title: "Total Extended",
          value: summary.totalExtended.count,
          unit: summary.totalExtended.change,
          icon: <SquarePlus className="w-5 h-5" />,
        },
        {
          title: "Total Bookings",
          value: summary.totalBookings.count,
          unit: summary.totalBookings.change,
          icon: <ClipboardList className="w-5 h-5" />,
        },
        {
          title: "Total Commission",
          value: `₦${Number(summary.totalCommission).toLocaleString()}`,
          unit: "+0%", // You can adjust this if you want
          icon: <ListChecks className="w-5 h-5" />,
        },
      ]
    : [];

  useEffect(() => {
    if (reserveData) {
      console.log("✅ Reserve data fetched:", reserveData);
    }
  }, [summaryData]);

  if (isLoading) return <p className="p-4">Loading summary...</p>;
  if (isError)
    return <p className="p-4 text-red-500">Failed to load summary</p>;
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
            <Stats data={statsData}/>
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
