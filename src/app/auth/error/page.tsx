import Link from "next/link";

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
  searchParams: {
    error: string;
  };
};

export default function AuthErrorPage({ searchParams: { error } }: Props) {
  const { statusCode, title, description } = getErrorInfo(error);
  return (
    <section className="flex flex-col items-center gap-3 mt-24">
      <h1 className="text-7xl text-red-600 font-bold">{statusCode}</h1>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-lg mt-3">{description}</p>
      <Link
        href="/"
        className="mt-3 py-3 px-6 rounded-md text-white text-lg font-medium bg-slate-900 hover:bg-slate-800 active:scale-95"
      >
        RETURN HOME
      </Link>
    </section>
  );
}
