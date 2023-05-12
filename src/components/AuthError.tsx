"use client";

import Link from "next/link";
import Button from "./ui/Button";
import { FaHome } from "react-icons/fa";

type ErrorInfo = {
  statusCode: number;
  title: string;
  description: string;
};

function getErrorInfo(error: string): ErrorInfo {
  switch (error) {
    case "AccessDenied":
      return {
        statusCode: 401,
        title: "Access Denied",
        description: "Only Admin accounts have access.",
      };
    default:
      return {
        statusCode: 500,
        title: "Server Error",
        description:
          "Please try again later or feel free to contact us if the problem persists.",
      };
  }
}

type Props = {
  error: string;
};

export default function AuthError({ error }: Props) {
  const { statusCode, title, description } = getErrorInfo(error);
  return (
    <>
      <h1 className="text-7xl text-red-600 font-bold">{statusCode}</h1>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-lg my-3">{description}</p>
      <Link href="/">
        <Button
          icon={<FaHome className="mr-2 h-5 w-5" />}
          text="RETURN HOME"
          onClick={() => {}}
        />
      </Link>
    </>
  );
}
