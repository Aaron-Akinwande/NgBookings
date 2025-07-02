"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  return (
    <div className="bg-[url('/bg.png')] min-h-screen bg-cover bg-no-repeat">
      <div className="bg-[url('/purple.png')] min-h-screen bg-cover bg-no-repeat flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-end gap-4 p-4">
          <div className="bg-white text-[#7E0140] font-medium text-sm px-4 py-2 rounded-xl">
            Sign Up
          </div>
          <div className="text-white font-medium text-sm px-4 py-2 rounded-xl flex items-center gap-2">
            <img src="/Group.png" alt="language" className="w-4 h-4" />
            English
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 justify-center items-center px-4 py-8">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left: Form */}
            <div className="md:col-span-2 bg-white rounded-2xl p-6 flex flex-col gap-6 shadow-md">
              <img src="/logo.png" alt="logo" className="w-36" />

              <div className="flex flex-col gap-4">
                <label className="text-sm text-[#4F4F50]">Phone Number</label>
                <div className="flex items-center border border-[#C3C3C4] rounded-xl px-4 py-3 gap-2">
                  <img src="/9ja.png" alt="flag" className="w-5 h-5" />
                  <select className="outline-none bg-transparent text-sm font-medium text-black mr-2">
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent outline-none text-sm font-medium"
                  />
                  <button className="text-[#7E0140] text-sm font-semibold">
                    VERIFY
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#7E0140] text-white font-semibold py-3 rounded-xl">
                Sign In
              </button>

              <div className="flex items-center text-sm text-[#999999] gap-2">
                <hr className="flex-1 border-t border-[#C3C3C4]" />
                <span>or sign in with</span>
                <hr className="flex-1 border-t border-[#C3C3C4]" />
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <Link href="/" className="w-full">
                  <button className="w-full flex justify-center items-center gap-3 border border-[#C3C3C4] py-3 rounded-xl text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                <Link href="/email_sign_In" className="w-full">
                  <button className="w-full flex justify-center items-center gap-3 border border-[#C3C3C4] py-3 rounded-xl text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    Email Code
                  </button>
                </Link>
              </div>

              <div className="text-center text-xs text-[#999999] mt-4">
                By proceeding, you agree to our{" "}
                <span className="text-[#7E0140] font-medium underline">
                  Privacy and Cookie Statement
                </span>
              </div>
            </div>

            {/* Right: Info Section */}
            <div className="text-white text-center md:text-left space-y-3">
              <h2 className="text-2xl md:text-4xl font-extrabold leading-snug">
                Sign in to Travel Agent <br /> Account
              </h2>
              <p className="text-lg md:text-2xl font-medium">
                Book hotels for customers <br className="hidden md:block" /> and
                earn commission
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
