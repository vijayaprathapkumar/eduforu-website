'use client';

import React, { ReactNode } from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';

export type Childprops = {
    children: ReactNode;
}

const HomePageLayout: React.FC<Childprops> = ({ children }) => {
  
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  };
  
  export default HomePageLayout;
  
