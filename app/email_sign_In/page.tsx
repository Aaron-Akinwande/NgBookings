"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { getOTP, verifyOTP } from "@/api/apiCall";

export default function page() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleGetOTP = async () => {
    try {
      const response = await getOTP(email);
      console.log("OTP Sent:", response);
      setOpen(true);
    } catch (err) {
      console.error("Error sending OTP:", err);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await verifyOTP({ email, otp });
      setOpen(false);
      console.log("OTP Verified:", response);
    } catch (err) {
      console.error("Error verifying OTP:", err);
    }
  };

  return (
    <div className="bg-[url('/bg.png')] min-h-screen bg-cover overflow-auto">
      <div className="bg-[url('/purple.png')] flex flex-col gap-8 min-h-screen bg-cover px-4 py-6">
        {/* Header */}
        <div className="flex justify-end gap-4">
          <div className="font-medium text-sm sm:text-base text-[#7E0140] rounded-xl p-2 bg-white">
            Sign Up
          </div>
          <div className="font-medium text-sm sm:text-base text-white rounded-xl p-2 flex gap-2">
            <img src="/Group.png" alt="lang" className="w-4 h-4" /> English
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 items-center w-full h-full max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2 flex flex-col gap-6 p-5 bg-white rounded-2xl w-full">
            <div>
              <img src="/logo.png" alt="logo" className="h-6 sm:h-8" />
            </div>

            {/* Email + OTP */}
            <div className="flex flex-col gap-4">
              <label className="text-sm text-[#4F4F50]">Email address</label>
              <div className="flex items-center border border-[#C3C3C4] rounded-xl px-4 py-3">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm"
                />
                <button
                  onClick={handleGetOTP}
                  className="text-[#7E0140] text-sm font-semibold ml-2"
                >
                  VERIFY
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-[#7E0140] text-white font-semibold py-3 rounded-xl">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center text-sm text-[#999999] gap-2">
              <hr className="w-2/5 border-t border-[#C3C3C4]" />
              <p>or sign in with</p>
              <hr className="w-2/5 border-t border-[#C3C3C4]" />
            </div>

            {/* Alternative Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Link href="/" className="w-full">
                <button className="flex justify-center items-center gap-3 w-full border border-[#C3C3C4] py-3 rounded-xl font-medium text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Password
                </button>
              </Link>

              <Link href="/phone_sign_In" className="w-full">
                <button className="flex justify-center items-center gap-3 w-full border border-[#C3C3C4] py-3 rounded-xl font-medium text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  SMS Code
                </button>
              </Link>
            </div>

            {/* Terms */}
            <p className="text-center text-xs text-[#999999]">
              By proceeding, you agree to our{" "}
              <span className="text-[#7E0140] font-medium underline">
                Privacy and Cookie Statement
              </span>
            </p>
          </div>

          {/* Right Section (Only on larger screens) */}
          <div className="hidden lg:flex text-white flex-col gap-2 pt-6">
            <h1 className="text-2xl xl:text-4xl font-extrabold leading-tight">
              Sign in to Travel Agent <br /> Account
            </h1>
            <p className="text-lg xl:text-2xl font-medium">
              Book hotels for customers and <br /> earn commission
            </p>
          </div>
        </div>
      </div>

      {/* OTP Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <img src="/alert.png" alt="" className="h-12 w-12" />
            <DialogTitle>Enter OTP</DialogTitle>
            <DialogDescription>
              A confirmation code has been sent to your email <br />
              address at <span className="font-semibold">{email}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            <label htmlFor="code" className="text-sm font-medium text-[#4F4F50]">
              Enter confirmation code
            </label>
            <input
              id="code"
              type="text"
              placeholder="Enter code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-[#C3C3C4] rounded-xl px-4 py-3 text-sm outline-none"
            />
          </div>

          <div className="w-full flex justify-center gap-1 text-sm">
            <span className="text-[#4F4F50]">Resend confirmation code in</span>
            <span className="font-medium">0:30</span>
          </div>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setOpen(false)}
              className="border border-[#C3C3C4] text-sm px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              className="bg-[#FFEFCC] px-4 py-2 rounded-lg text-sm font-medium"
              onClick={handleVerifyOTP}
            >
              Verify
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
