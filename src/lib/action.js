"use server";
import { signIn, signOut } from "./auth";

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleLogout = async () => {
  await signOut();
};
