import Footer from "@/components/footer";
import Header from "@/components/header";

import type { Metadata } from "next";
import { DefaultSeo } from "next-seo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://2nd-main-project.depth-mju.co.kr/"),
  title: "Goal in! Demoday in-DEPth",
  description:
    "명지대학교 프로젝트형 IT 동아리 DEPth 2기의 마지막 여정, 3개의 서비스를 만나보세요",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-black text-white">
        <header>
          <Header />
        </header>
        <main className=" w-full  flex flex-col items-center   ">
          {children}
        </main>
        <footer className="relative  w-full  ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
