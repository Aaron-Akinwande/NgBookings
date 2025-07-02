import { CalendarCheck2, ListChecks, BookmarkX, ClipboardPen, SquarePlus, ClipboardList } from 'lucide-react';
import React from 'react'

export default function Stats() {

     const stats = [
    {
      title: "Daily Check-in",
      value: "5,000",
      unit: "+0.5%",
      icon: <CalendarCheck2 />,
    },
    {
      title: "Daily Check-out",
      value: "5,000",
      unit: "+0.5%",
      icon: <CalendarCheck2 />,
    },
    {
      title: "New Bookings",
      value: "5,000",
      unit: "+0.5%",
      icon: <ListChecks />,
    },
    {
      title: "Total Cancelations",
      value: "5,000",
      unit: "+0.5%",
      icon: <BookmarkX />,
    },
    {
      title: "Pending bookings",
      value: "5,000",
      unit: "+0.5%",
      icon: <ClipboardPen />,
    },
    {
      title: "Total Expired",
      value: "5,000",
      unit: "+0.5%",
      icon: <SquarePlus />,
    },
    {
      title: "Total Bookings",
      value: "5,000",
      unit: "+0.5%",
      icon: <ClipboardList />,
    },
    {
      title: "Total Cancelations",
      value: "N500,000",
      unit: "+0.5%",
      icon: <ListChecks />,
    },
  ];

  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
         {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white pt-3  rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col p-3 gap-3">
                  <div className=" flex gap-2 items-center text-[#7E0140] ">
                    {stat.icon}
                    <p className="text-xl font-semibold text-gray-600 ">
                      {stat.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}{" "}
                      <span className="text-sm font-medium text-[#0B8429] bg-[#F2F2F7] rounded-xl p-1">
                        {stat.unit}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
    </div>
  )
}
