"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

export default function SignInButton() {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <button
      onClick={() => signIn()}
      className="hover:scale-110 hover:rotate-12"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? <AiFillUnlock /> : <AiFillLock />}
    </button>
  );
}
