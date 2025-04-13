"use client";

import { LogOut } from "lucide-react";
import { signOut } from "@/auth";
import Swal from "sweetalert2";
import { logout } from "@/actions/logout.action";

const LogOutButton = () => {
  const handleLogOut = async () => {
    const response = await logout();
    console.log(response);
    Swal.fire({
      icon: response.error ? "error" : "success",
      title: response.message,
    });
  };

  return (
    <form action={handleLogOut}>
      <button
        type="submit"
        className="text-white flex items-center hover:text-red-400"
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span className="hidden sm:inline">Log Out</span>
      </button>
    </form>
  );
};

export default LogOutButton;
