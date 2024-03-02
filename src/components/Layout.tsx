"use client";

import React, { ReactNode, useState } from 'react';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import LoadingOverlay from '../components/LoadingOverlay';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);

  // Function to toggle loading state
  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-5 lg:px-24">
      <LoadingOverlay onLoadingFinish={handleLoadingFinish}>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header />
          <main id="content" className='pt-24 lg:w-1/2 lg:py-24'>
              <About />
              <Experience />
              <Footer />
          </main>
        </div>
      </LoadingOverlay>
    </div>
  );
};

export default Layout;