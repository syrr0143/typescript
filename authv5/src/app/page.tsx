"use client"
import { LoginButton } from "@/components/ui/auth/loginButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <LoginButton>
          <Button disabled={loading} size={"lg"} >{loading ? "please wait ..." : "Login"}</Button>
        </LoginButton>
      </div>
    </div>
  );
}
