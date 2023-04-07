import { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
