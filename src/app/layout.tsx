import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The great Movies App",
  description: "not the only but the best movies app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
