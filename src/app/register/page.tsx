import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="flex min-h-screen flex--col items-center justify-between p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md">
        <h1 className="text-4xl text-center font-semibold mb-8 text-white">
          Register
        </h1>
        <form>
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
        </form>
        <div className="flex flex-col">
          <div className="text-center text-gray-600 mt-4">- OR -</div>
          <Link href="/login" className="text-green-400 mx-auto">
            Login with an existing account
          </Link>
        </div>
      </div>
    </div>
  );
}
