"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Button from "./ui/Button";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

function getProviderIcon(name: string) {
  switch (name.toLowerCase()) {
    case "google":
      return <FcGoogle className="mr-3 h-5 w-5" />;
    default:
      return "";
  }
}

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <Button
          key={id}
          icon={getProviderIcon(name)}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
        />
      ))}
    </>
  );
}
