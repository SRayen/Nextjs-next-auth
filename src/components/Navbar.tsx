"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { data: session }: any = useSession();
  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>

        <div className="flex gap-10">
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>

          {!session ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>

              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session?.user?.email}
              <li>
                <button
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}
