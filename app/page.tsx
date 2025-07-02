"use client";
import { getRequest, login } from "@/api/apiCall";
import { AGENT_LOGIN, SUMMARY } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [focusedInput, setFocusedInput] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputBorderClass = (field: any) =>
    focusedInput === field ? "border-[#7E0140]" : "border-[#C3C3C4]";

  const iconColor = (field: any) =>
    focusedInput === field ? "#7E0140" : "#000000";

  const labelClass = (field: any, value: any) =>
    `absolute left-0 px-1 transition-all duration-200 ${
      focusedInput === field || value
        ? "-top-3 text-xs text-[#7E0140] bg-white "
        : "top-2 text-base text-gray-500"
    }`;

  const router = useRouter();

    const { data } = useQuery({
    queryKey: [queryKeys.getSummary],
    queryFn: async () => await getRequest({ url: SUMMARY }),
    retry: 2,
  });

  console.log(data)


  const mutation = useMutation({
    mutationFn: async () =>
      await login({ url: AGENT_LOGIN, data: { email, password } }),
    onSuccess: (data) => {
      if (data) {
        console.log("Login success:", data);
        // router.push("/dashboard");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

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

        <div className=" h-full flex items-center justify-center col-span-3 ">
          <form
            onSubmit={handleSubmit}
            className=" w-3/4 grid grid-cols-3 gap-10 items-center  px-4"
          >
            <div className="col-span-2 flex flex-col gap-10 p-5 rounded-2xl h-full w- bg-white">
              <div>
                <img src="/logo.png" alt="" />
              </div>
              <div className=" flex flex-col gap-6">
                <div
                  className={`relative flex items-center gap-2 pb-2 border-b ${inputBorderClass(
                    "username"
                  )}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconColor("username")}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>

                  <div className="relative w-full">
                    <label className={labelClass("username", email)}>
                      Username, mobile number or email address
                    </label>
                    <input
                      type="text"
                      className="w-full pt-4 pb-1 outline-none bg-transparent"
                      onFocus={() => setFocusedInput("username")}
                      onBlur={() => setFocusedInput(null)}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div
                  className={`relative flex items-center  gap-2 pb-2 border-b ${inputBorderClass(
                    "password"
                  )}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconColor("password")}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock-keyhole"
                  >
                    <circle cx="12" cy="16" r="1" />
                    <rect x="3" y="10" width="18" height="12" rx="2" />
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                  </svg>

                  <div className="relative w-full">
                    <label className={labelClass("password", password)}>
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full pt-4 pb-1 outline-none bg-transparent"
                      onFocus={() => setFocusedInput("password")}
                      onBlur={() => setFocusedInput(null)}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className=" flex justify-end w-full font-semibold text-base text-[#7E0140]">
                  Forgot Password?
                </div>
              </div>
              <div className=" flex flex-col gap-5 ">
                {/* <Link href="/dashboard" onClick={() => handleSubmit}> */}
                  <button type="submit" className="w-full bg-[#7E0140] cursor-pointer text-white font-semibold py-3 rounded-xl">
                    Sign In
                  </button>
                {/* </Link> */}

                <div className="flex justify-between items-center text-sm text-[#999999] gap-2">
                  <hr className="w-2/5 border-t border-[#C3C3C4]" />
                  <p className=" flex">or sign in with</p>
                  <hr className="w-2/5 border-t border-[#C3C3C4]" />
                </div>

                <div className="flex  gap-3">
                  <Link href="/phone_sign_In" className="w-full">
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
                        className="lucide lucide-message-square-icon lucide-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      SMS Code
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
          </form>
        </div>
      </div>
    </div>
  );
}
