"use client";

import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { authStatus, setAuthStatus } = useAuth();
  const router = useRouter();
  if (!authStatus) {
    router.push("/login");
    return <></>;
  }
  return <>{children}</>;
};

export default ProtectedLayout;
