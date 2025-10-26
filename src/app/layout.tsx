import Footer from '@/components/footer'
import Header from '@/components/header'
import DevNotice from '@/components/devnotice';

import "@/styles/globals.scss";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanji Splitter",
  description: "Quickly break down kanji into their components and keywords.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      </head>
      <body className={inter.className}>
        <DevNotice />
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}