"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

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
        <button
          className="inline-flex items-center justify-center py-3 px-6 rounded-md text-white text-lg font-medium bg-slate-900 hover:bg-slate-800 active:scale-95"
          key={id}
          onClick={() => signIn(id, { callbackUrl })}
        >
          {getProviderIcon(name)}
          Sign In with {name}
        </button>
      ))}
    </>
  );
}
