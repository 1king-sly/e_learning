import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-learning",
  description: "Moi Forces Academy Mombasa E-Learning System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
          <ToasterContext/>
          {children}
           <Analytics />
        </AuthContext>
      </body>
    </html>
  );
}
