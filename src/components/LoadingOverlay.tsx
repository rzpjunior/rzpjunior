"use client";

import React, { ReactNode, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Loading = dynamic(() => import('./Loading'), { ssr: false });

interface LayoutProps {
  children: ReactNode;
}

const LoadingOverlay: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div> 
      {loading && <Loading />}
      {!loading && children}
    </div>
  );
};

export default LoadingOverlay;
