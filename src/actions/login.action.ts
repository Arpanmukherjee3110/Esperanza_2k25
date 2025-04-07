"use server";

import { signIn } from "@/auth";

const handleLogin = async (loginCredentials: any) => {
  await signIn("credentials", {
    ...loginCredentials,
    redirect: true,
    redirectTo: "/",
  });
};

export {handleLogin}