'use client';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

interface ConfettiSectionProps {
  children: React.ReactNode;
}

export const ConfettiSection: React.FC<ConfettiSectionProps> = ({
  children,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowConfetti(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {showConfetti && <ReactConfetti recycle={false} numberOfPieces={200} />}
      {children}
    </div>
  );
};
