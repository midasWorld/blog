import SignIn from "@/components/SignIn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Login to Midas'Blog",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex min-h-full justify-center items-center py-12 px-4">
      <div className="flex flex-col space-y-4">
        <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
      </div>
    </section>
  );
}
