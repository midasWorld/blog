import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import AuthContext from "@/context/AuthContext";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Midas's Blog",
    template: "Midas's Blog | %s",
  },
  description: "서버 개발자 Midas's 블로그",
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
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <AuthContext>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
