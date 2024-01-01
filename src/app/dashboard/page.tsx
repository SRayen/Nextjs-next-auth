import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
    </div>
  );
}
