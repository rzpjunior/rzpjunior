"use client"

import React, { ReactNode, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Loading = dynamic(() => import('./Loading'), { ssr: false });

interface LoadingOverlayProps {
  children: ReactNode;
  onLoadingFinish: () => void;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ children, onLoadingFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingFinish]);

  return (
    <div> 
      {loading && <Loading />}
      {!loading && children}
    </div>
  );
};

export default LoadingOverlay;
