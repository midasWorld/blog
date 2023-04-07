import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Midas's Blog",
  description: "개발 관련 글을 작성하는 곳입니다.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}