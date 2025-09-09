'use client'

import { usePathname } from 'next/navigation';

import './globals.css';

import Navbar from '@/components/LandingPage/navbar';
import { NavbarContextProvider } from '@/contexts/NavbarContextProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentPathname = usePathname();

  return (
    <html lang="en">
      <body>
        {
          currentPathname !== "/" ?
            <NavbarContextProvider>
              <Navbar />
              <div className="body-content">
                {children}
              </div>
            </NavbarContextProvider> :
            children
        }
      </body>
    </html>
  );
}
