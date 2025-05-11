import React, { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade';
  duration?: number;
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  threshold = 0.1,
  className = '',
  animation = 'fade-up',
  duration = 800,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold });

  const baseStyles: React.CSSProperties = {
    opacity: 0,
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  const animationStyles: React.CSSProperties = isVisible
    ? {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      }
    : {
        opacity: 0,
        transform:
          animation === 'fade-up'
            ? 'translate3d(0, 40px, 0)'
            : animation === 'fade-down'
            ? 'translate3d(0, -40px, 0)'
            : animation === 'fade-left'
            ? 'translate3d(40px, 0, 0)'
            : animation === 'fade-right'
            ? 'translate3d(-40px, 0, 0)'
            : 'translate3d(0, 0, 0)',
      };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyles, ...animationStyles }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll; 