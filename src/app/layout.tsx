'use client'

import { usePathname } from 'next/navigation';

import './globals.css';

import Navbar from '@/components/LandingPage/navbar';
import { NavbarContextProvider } from '@/contexts/NavbarContextProvider';
import { Paths } from '@/config';
// import PageNotFound from './page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentPathname = usePathname();

  return (
    <html lang="en">
      <body>
        {/* {
          Paths.includes(currentPathname) ?
            <NavbarContextProvider>
              <Navbar />
              <div className="body-content">
                {children}
              </div>
            </NavbarContextProvider> :
            <PageNotFound />
        } */}
        <Navbar />
        <div className="body-content">
          {children}
        </div>
      </body>
    </html>
  );
}
