"use server";

import { signOut } from "@/auth";

const logout = async () => {
  try {
    await signOut();
    return {
      success: true,
      status: "S",
      message: "Logged out successfully",
    };
  } catch (error: any) {
    console.log(error);
    
    return {
      success: false,
      status: "F",
      message: "Logout failed",
      error: error,
    };
  }
};

export { logout };
