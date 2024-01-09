import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full bg-black text-white">
        <header>
          <Header />
        </header>
        <main className="  min-h-screen w-full overflow-x-hidden   flex flex-col items-center   ">
          {children}
        </main>
        <footer className="relative  w-full  ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
