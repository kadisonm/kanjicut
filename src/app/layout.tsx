import Footer from '@/components/footer'
import Header from '@/components/header'
import DevNotice from '@/components/devnotice';

import "@/styles/globals.scss";
import { Lexend } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KanjiCut",
  description: "Cut kanji stroke by stroke into their components and keywords.",
};

const lexend = Lexend({
  subsets: ['latin'],
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      </head>
      <body className={lexend.className}>
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}