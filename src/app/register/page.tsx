"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
export default function Register() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await axios.post("/api/register", { email, password });

      if (res.status === 201) {
        setError("");
        router.push("/login");
      }
    } catch (error: any) {
      error?.response?.data?.message
        ? setError(error.response.data.message)
        : setError("An unexpected error occurred. Please try again later.");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex--col items-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md">
          <h1 className="text-4xl text-center font-semibold mb-8 text-white">
            Register
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border border-gray-300 text-black rounded px-3 mb-4 focus:outline"
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="w-full border border-gray-300 text-black rounded px-3 mb-4 focus:outline"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="flex flex-col">
            <div className="text-center text-gray-600 mt-4">- OR -</div>
            <Link href="/login" className="text-green-400 mx-auto">
              Login with an existing account
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
