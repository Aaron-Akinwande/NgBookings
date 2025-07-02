"use client";
import { login } from "@/api/apiCall";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
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

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("authtoken", data.agentDetails.code);
      router.push("/dashboard");
    },
    onError: (error: any) => {
      console.error("Login failed", error?.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="bg-[url('/bg.png')] min-h-screen bg-cover">
      <div className="bg-[url('/purple.png')] flex flex-col gap-10 min-h-screen bg-cover p-4">
        {/* Top Bar */}
        <div className="flex justify-between sm:justify-end gap-3">
          <div className="font-medium text-sm sm:text-base text-[#7E0140] rounded-xl p-2 bg-white">
            Sign Up
          </div>
          <div className="font-medium text-sm sm:text-base text-white rounded-xl p-2 flex gap-2">
            <img src="/Group.png" alt="" />
            English
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center flex-1">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4"
          >
            {/* Login Form */}
            <div className="md:col-span-2 flex flex-col gap-8 p-6 rounded-2xl bg-white w-full">
              <div>
                <img src="/logo.png" alt="Logo" className="h-8" />
              </div>

              <div className="flex flex-col gap-6">
                {/* Email Input */}
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

                {/* Password Input */}
                <div
                  className={`relative flex items-center gap-2 pb-2 border-b ${inputBorderClass(
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

                <div className="flex justify-end text-sm font-semibold text-[#7E0140]">
                  Forgot Password?
                </div>
              </div>

              {/* Sign-in Options */}
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="w-full bg-[#7E0140] text-white font-semibold py-3 rounded-xl"
                >
                  Sign In
                </button>

                <div className="flex items-center gap-2 text-sm text-[#999999]">
                  <hr className="flex-1 border-t border-[#C3C3C4]" />
                  or sign in with
                  <hr className="flex-1 border-t border-[#C3C3C4]" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/phone_sign_In" className="w-full">
                    <button className="w-full border border-[#C3C3C4] py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium">
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
                        className="lucide lucide-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      SMS Code
                    </button>
                  </Link>

                  <Link href="/email_sign_In" className="w-full">
                    <button className="w-full border border-[#C3C3C4] py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium">
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
                        className="lucide lucide-mail"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                      </svg>
                      Email Code
                    </button>
                  </Link>
                </div>

                <p className="text-xs text-center text-[#999999]">
                  By proceeding, you agree to our{" "}
                  <span className="text-[#7E0140] underline font-medium">
                    Privacy and Cookie Statement
                  </span>
                </p>
              </div>
            </div>

            {/* Right Text Panel */}
            <div className="text-white text-center md:text-left flex flex-col justify-center gap-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                Sign in to Travel Agent Account
              </div>
              <div className="text-base sm:text-lg md:text-2xl font-medium">
                Book hotels for customers and earn commission
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
