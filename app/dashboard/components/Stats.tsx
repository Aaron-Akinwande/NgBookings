import { CalendarCheck2, ListChecks, BookmarkX, ClipboardPen, SquarePlus, ClipboardList } from 'lucide-react';
import React from 'react'

export default function Stats({data}: any) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-0">
      {data.map((stat: { icon: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; value: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; unit: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4"
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex gap-2 items-center text-[#7E0140]">
              {stat.icon}
              <p className="text-sm sm:text-base font-semibold text-gray-600 leading-tight">
                {stat.title}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
              <span className="text-xs sm:text-sm font-medium text-[#0B8429] bg-[#F2F2F7] rounded-lg px-2 py-1 w-fit">
                {stat.unit}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}