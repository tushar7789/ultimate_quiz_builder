'use client'

import './globals.css';

import Navbar from '@/components/LandingPage/navbar';
import { NavbarContextProvider } from '@/contexts/NavbarContextProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarContextProvider>
          <Navbar />
          {children}
        </NavbarContextProvider>
      </body>
    </html>
  );
}
