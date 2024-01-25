
import React from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '../src/_components/header/header';
import Menu from "../src/_components/menu/menu";
import { AuthProvider } from "../src/_functions/AuthContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediMe',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="se">
      <AuthProvider>
        <body className={inter.className}>
          <Header></Header>
          <Menu></Menu>
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}
