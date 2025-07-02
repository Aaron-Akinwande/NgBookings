"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  return (
    <div className="  bg-[url('/bg.png')] h-screen bg-cover">
      <div className="  bg-[url('/purple.png')] flex flex-col gap-17 h-full bg-cover grid-cols-4">
        <div className=" col-span-1 ">
          <div className=" flex justify-end gap-7 p-3">
            <div className=" font-medium text-base text-[#7E0140] rounded-xl p-2 bg-white">
              Sign Up
            </div>
            <div className=" font-medium text-base text-white rounded-xl p-2 flex gap-2">
              {" "}
              <img src="/Group.png" alt="" /> English
            </div>
          </div>
        </div>

        <div className=" h-full flex justify-center col-span-3 ">
          <div className="  h-3/4 w-3/4 grid grid-cols-3 gap-10 items-center  px-4">
            <div className="col-span-2 flex flex-col gap-10 p-5 rounded-2xl h-full w- bg-white">
              <div>
                <img src="/logo.png" alt="" />
              </div>
              <div className=" flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                     <div className=" font-normal text-sm text-[#4F4F50]">Phone Number</div>
                    <div className="flex items-center border border-[#C3C3C4] rounded-xl px-4 py-3 w-full">
                      <img src="/9ja.png" alt="" />
                      <select className="outline-none bg-transparent text-sm font-medium mr-2 text-[#000]">
                        <option value="+234">+234</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-transparent outline-none text-sm font-medium"
                      />
                      <button className=" cursor-pointer text-[#7E0140] text-sm font-semibold ">
                        VERIFY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-5 ">
                <button className="w-full bg-[#7E0140] text-white font-semibold py-3 rounded-xl">
                  Sign In
                </button>

                <div className="flex justify-between items-center text-sm text-[#999999] gap-2">
                  <hr className="w-2/5 border-t border-[#C3C3C4]" />
                  <p className=" flex">or sign in with</p>
                  <hr className="w-2/5 border-t border-[#C3C3C4]" />
                </div>

                <div className="flex  gap-3">
                  <Link href="/" className="w-full cursor-pointer">
                    <button className="flex justify-center gap-3 cursor-pointer w-full border border-[#C3C3C4] py-3 rounded-xl font-medium text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                   
                  <Link href="/email_sign_In" className="w-full cursor-pointer">
                  <button className="flex justify-center gap-3 cursor-pointer w-full border border-[#C3C3C4] py-3 rounded-xl font-medium text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail-icon lucide-mail"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    Email Code
                  </button>
                  </Link>
                </div>

                <div className="text-center text-xs text-[#999999]">
                  By proceeding, you agree to our{" "}
                  <span className="text-[#7E0140] font-medium underline">
                    Privacy and Cookie Statement
                  </span>
                </div>
              </div>
            </div>

            <div className="  text-white rounded-xl pt-9 flex flex-col  gap-2">
              <div className=" text-4xl font-extrabold">
                Sign in to Travel Agent <br />
                Account
              </div>
              <div className=" text-2xl font-medium">
                Book hotels for customers and earn <br /> commission
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
