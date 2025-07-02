import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";

export default function Table() {
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "Stayed":
        return <Badge className="bg-[#E6FFF0] text-[#0B8429]">Stayed</Badge>;
      case "Cancelled":
        return <Badge className="bg-[#FFF0F0] text-[#EB0F0F]">Cancelled</Badge>;
      case "No-show":
        return <Badge className="bg-[#F2F2F7] text-[#636366]">No-show</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
  }: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) => {
    const renderPages = () => {
      const pages = [];

      // Always show first page
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === 1
              ? "bg-blue-100 text-blue-600 font-medium"
              : "text-gray-600"
          }`}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pages.push(
          <span key="start-ellipsis" className="px-1 text-gray-400">
            ...
          </span>
        );
      }

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === i
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {i}
            </button>
          );
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="end-ellipsis" className="px-1 text-gray-400">
            ...
          </span>
        );
      }

      if (totalPages > 1) {
        pages.push(
          <button
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1 rounded-md text-sm ${
              currentPage === totalPages
                ? "bg-blue-100 text-blue-600 font-medium"
                : "text-gray-600"
            }`}
          >
            {totalPages}
          </button>
        );
      }

      return pages;
    };

    return (
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="text-sm"
        >
          ← Previous
        </Button>
        <div className="flex items-center space-x-1">{renderPages()}</div>
        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="text-sm"
        >
          Next →
        </Button>
      </div>
    );
  };

  const reservations = [
    {
      id: "RT001",
      guestName: "John Doe",
      checkIn: "Jan 5, 2024",
      checkOut: "Jan 8, 2024",
      nights: 3,
      property: "Villa Sunset",
      rooms: 2,
      amount: "N45,000.00",
      commission: "N4,500.00",
      balance: "N40,500.00",
      status: "No Show",
      paymentMethod: "Card",
      action: "View",
    },
    {
      id: "RT002",
      guestName: "Jane Smith",
      checkIn: "Jan 10, 2024",
      checkOut: "Jan 12, 2024",
      nights: 2,
      property: "Beach House",
      rooms: 1,
      amount: "N35,000.00",
      commission: "N3,500.00",
      balance: "N31,500.00",
      status: "Stayed",
      paymentMethod: "Transfer",
      action: "View",
    },
    {
      id: "RT003",
      guestName: "Mike Johnson",
      checkIn: "Jan 15, 2024",
      checkOut: "Jan 18, 2024",
      nights: 3,
      property: "Mountain Lodge",
      rooms: 3,
      amount: "N60,000.00",
      commission: "N6,000.00",
      balance: "N54,000.00",
      status: "Cancelled",
      paymentMethod: "Cash",
      action: "View",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Reservation Statement
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">Guest name/ID</th>
              <th className="px-4 py-3">Arrival</th>
              <th className="px-4 py-3">Departure</th>
              <th className="px-4 py-3">Rooms</th>
              <th className="px-4 py-3">Nights</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Final Amount</th>
              <th className="px-4 py-3">Commission</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Property Name/ID</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium">{res.guestName}</p>
                    <p className="text-gray-500 text-xs">{res.id}</p>
                  </div>
                </td>
                <td className="px-4 py-3">{res.checkIn}</td>
                <td className="px-4 py-3">{res.checkOut}</td>
                <td className="px-4 py-3">{res.rooms}</td>
                <td className="px-4 py-3">{res.nights}</td>
                <td className="px-4 py-3">{res.amount}</td>
                <td className="px-4 py-3">{res.balance}</td>
                <td className="px-4 py-3">{res.commission}</td>
                <td className="px-4 py-3">{renderStatusBadge(res.status)}</td>
                <td className="px-4 py-3">
                  <p>{res.property}</p>
                  <p className="text-gray-500 text-xs">
                    #{Math.floor(Math.random() * 100000)}
                  </p>
                </td>
                <td className="px-4 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={(page) => console.log("Go to page:", page)}
        />
      </div>
    </div>
  );
}
