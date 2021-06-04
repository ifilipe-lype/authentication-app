import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./useAuth.js";

export function useRequireAuth(redirectTo = "/login") {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem("token");
    
    if (!token) {
      router.push(redirectTo);
    }
  }, [auth, router]);

  return auth;
}
