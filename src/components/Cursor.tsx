import React, { useEffect, useState } from 'react';

const GlowingCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default GlowingCursor;
