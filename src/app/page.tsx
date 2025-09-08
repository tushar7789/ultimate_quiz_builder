'use client'

import React from 'react';

import LandingBody from '@/components/LandingPage/landingbody';
import { SetPage } from '@/contexts/NavbarContextProvider';

export default function Home() {

  SetPage('Home');

  return (
    <LandingBody />
  );
}
