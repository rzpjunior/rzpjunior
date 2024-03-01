import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-5 lg:px-24">
      <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header />
        <main id="content" className='pt-24 lg:w-1/2 lg:py-24'>
         <About />
         <Experience />
         <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;