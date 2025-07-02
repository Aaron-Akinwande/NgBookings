"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronDown, User } from "lucide-react"
import { Input } from "@/components/ui/input"

const reservationsFilter = [
  { label: "New reservation", color: "bg-purple-500" },
  { label: "Stayed", color: "bg-green-600" },
  { label: "Pending", color: "bg-yellow-500" },
  { label: "No-show", color: "bg-orange-500" },
  { label: "Canceled", color: "bg-red-500" },
]

const stayStatusFilter = [
  { label:"Check-in", color: "bg-green-600"},
  {label:"Checked out", color:"bg-yellow-500" },
  {label:"Extending" , color: "bg-orange-500"}
]

const properties = [
  "All Properties",
  "Ivy Hotel",
  "Hotel Partners"
]

const guests = [
  { name: "John Doe", id: "#1234567" },
  { name: "Sarah Lawson", id: "#1234568" }
]

export function FiltersBar() {
  return (
    <div className="flex flex-wrap gap-3 justify-between items-center py-4">
      {/* Always show: First 3 filters */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Reservation <ChevronDown className="ml-1 w-4 h-4" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter Reservation</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {reservationsFilter.map((item, i) => (
            <DropdownMenuItem key={i} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Stay status <ChevronDown className="ml-1 w-4 h-4" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {stayStatusFilter.map((status, i) => (
            <DropdownMenuItem key={i} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.color}`}></span>
              {status.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">All Properties <ChevronDown className="ml-1 w-4 h-4" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter Properties</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Input placeholder="Search Properties" className="p-2" />
          {properties.map((prop, i) => (
            <DropdownMenuItem key={i} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-purple-700' : i === 1 ? 'bg-blue-600' : 'bg-yellow-500'}`} />
              {prop}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Hide the rest on small screens */}
      <div className="hidden md:flex gap-3 items-center flex-wrap">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">All Guest <ChevronDown className="ml-1 w-4 h-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter Guest</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Input placeholder="Search By Name, ID" className="p-2" />
            {guests.map((guest, i) => (
              <DropdownMenuItem key={i} className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-600" />
                <div>
                  <div className="text-sm font-medium">{guest.name}</div>
                  <div className="text-xs text-muted-foreground">{guest.id}</div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">From:</span>
          <div className="flex gap-1 items-center p-2 rounded-2xl bg-[#F2F2F7] text-sm">
            <Calendar className="w-4 h-4 text-gray-600" /> Jan 2025
          </div>
          <span className="text-sm text-gray-600">To:</span>
          <div className="flex gap-1 items-center p-2 rounded-2xl bg-[#F2F2F7] text-sm">
            <Calendar className="w-4 h-4 text-gray-600" /> Dec 2025
          </div>
        </div>

        <Button className="bg-[#7E0140] hover:bg-[#6a0136] text-white text-sm">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}
