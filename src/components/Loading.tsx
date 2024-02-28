"use client";

import React, { useState, useEffect, useRef } from 'react';

const Loading: React.FC = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [backoff, setBackoff] = useState(100);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const textToType = "rzpjunior";

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (index < textToType.length) {
        setText(textToType.slice(0, index + 1));
        setIndex(index + 1);
        setBackoff(backoff * 1.1);
      } else {
        clearInterval(intervalRef.current!);
      }
    }, backoff);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [backoff, index]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-95 z-90">
      <div className="text-white text-4xl font-bold" style={{ fontFamily: 'monospace' }}>
        {text}
        {index < textToType.length && <span>_</span>}
      </div>
    </div>
  );
};

export default Loading;