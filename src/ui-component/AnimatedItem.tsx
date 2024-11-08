import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import React from 'react';

interface AnimatedItemProps {
    animateEffect: string;
    children: React.ReactNode;
    className?: string;
  }

const AnimatedItem = ({ animateEffect,children ,className}:AnimatedItemProps) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.05 });
  
    return (
      <div
        ref={ref}
        className={`${className} ftco-animate ${isIntersecting ? animateEffect + " " + 'ftco-animated' : ''}`}
        data-animate-effect={animateEffect}
      >
        {children}
      </div>
    );
  };

export default AnimatedItem;
