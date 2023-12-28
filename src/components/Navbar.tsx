import Link from "next/link";
import React from "react";
Link;
export default function Navbar() {
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

          <Link href="/login">
            <li>Login</li>
          </Link>

          <Link href="/register">
            <li>Register</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}
